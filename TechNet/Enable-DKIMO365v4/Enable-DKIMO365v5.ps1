<#

.Synopsis
   Enables DKIM signature in a single, multiple or all custom domains
.DESCRIPTION
    On V5
    Updated the way it connects to Office 365 to support MFA and no MFA.

    This script connects to your Office 365 tenant, after asking for credentials, gives you the selectors you need to implement for each domain and then enables DKIM.
    The process is as follows:
    *  Ask administrative Credentials for your O365 Tenant.
       - If you don't have MultiFactor Authentication (use Username and Password)
       - If you do have MFA, then you'll need to create an APP password "https://support.office.com/en-gb/article/create-an-app-password-for-office-365-3e7c860f-bda4-4441-a618-b53953ee1183"
    *  Connect to your O365 tenant to get the Initial DKIM config to get the 2 Selectors for a single, multiple or all custom domains
    *  Show you the two CNAMEs for each domain 
    >[!Note] if you use the parameter domain, it will consider to enable it on a single domain
             if you use the parameter domains it will do it on several domains with comma separated, and finally 
             if you use the ALL parameter, it will enable it for all the custom domains

    *  Will pause until you get all the DNS records Added into your registrar
    
    *  Finally it will use the connection to your O365 Tenant to enable DKIM on a single, multiple or all domains.

.EXAMPLE
   .\Enable-DKIMO365v5.ps1 -domain ranchosanjorge.net
   This  example will provide you 2 CNAMES for the domain ranchosanjorge.net and at the end will enable DKIM on that particular domain
   
.EXAMPLE
   .\Enable-DKIMO365v5.ps1 -domains ranchosanjorge.net,j0rt3g4.com
   This example will provide you 4 CNAMES (2 for each domain) to be created on your public DNS for each domain, and at the end enable DKIM on each of them.

.EXAMPLE
   .\Enable-DKIMO365v5.ps1 -domains ranchosanjorge.net
   This example is just for the sake of curiosity, and yes... it's the same as the 1st example; I just wanted to let you know how you can play with the parameters.
   (This will provide you 2 CNAMES for the domain ranchosanjorge.net and at the end will enable DKIM on that particular domain)

.EXAMPLE
   .\Enable-DKIMO365v5.ps1 -all
   This example will connect to your tenant, get all the custom domains in it without DKIM ENABLED, show you the 2 CNAMEs you must add on Public DNS for all the custom domains in your tenant
   
.EXAMPLE
    .\Enable-DKIMO365v5.ps1 -domains hubstream.mx,j0rt3g4.com -justEnable
    This example will ask for you global admin credentials and then is gonna try to Enable DKIM on both domains "Hubstream.mx" and "j0rt3g4.com". This parameter will not show you the 2 CNAMES because it will assume that you already create them.
   
.INPUTS
   InitialDomain: (Removed, for V3, since it will be queried programmatically).
   Domain: this should be a single domain string, if it doesn't match the laws of domains, it will get rejected, and the script will exit.
   or
   Domains: Same as above but allows you to add multiple domains with comma separated. 
   or
   All: Enabled on v4, to enable DKIM on all the custom domains in your tenant, excluding (onmicrosoft.com domains).

   The parameters domain, domains and All are mutually exclusive if one exists the others are ignored.

.OUTPUTS
   This script doesn't offer any output
.NOTES
   The main version just worked with a single domain.
   v.2 This versions also work for several domains. Also works with Get-help
   v.3 Better messages, errors, and colors of the messages.
       Better Logic 3 steps: connect to O365, get the primary domain, provide the DNS records, two by domains, and finally activate DKIM on the domain(s).
       Faster than V1,
       V2 was never posted on Technet.
   v.4 Since you can get the selectors from the Get-DkimSigningConfig cmdlet no more hardcoding, I'll get the selectors from there
       Enabled the switch All, now you can select a single domain, multiple domains or just all the custom domains to allow your security.
       Please don't forget to enable DMARC record on each domain since that simple text registry is the validator of SPF and DKIM.
Here's a way to do it: https://mxtoolbox.com/DMARCRecordGenerator.aspx (add a domain, policy to reject, two emails and 100% on percent and you'll get the full record on the gray background. Check it out!.
.COMPONENT
   This Cmdlet doesn't belong to any particular component
.ROLE
   This cmdlet enables DKIM for single or multiple domains in an O365 tenant.
.FUNCTIONALITY
   Functionality is described on the Synopsis.
#>
[Cmdletbinding(DefaultParameterSetName="Single")]
param(
    [Parameter(Mandatory=$true,Position=1,ParameterSetName="Single")]
    [Parameter(ParameterSetName="JustEnable",Position=0,Mandatory=$false)]    
    $domain,

    [Parameter(Mandatory=$true,Position=1,ParameterSetName="Multiple")]
    [Parameter(ParameterSetName="JustEnable",Position=1,Mandatory=$false)]    
    $domains,
    [Parameter(Mandatory=$true,Position=1,ParameterSetName="All")][switch]$All,
    [Parameter(ParameterSetName="JustEnable",Position=2,Mandatory=$true)][switch]$JustEnable=$false
)
#to here
#And uncomment the 2 lines below and modify with the correct values of your domain and initialdomain (the one that ends with onmicrosoft.com)"
Write-Host "STEP 1: " -ForegroundColor White -BackgroundColor Black -NoNewline
Write-Host "Please provide a Global Administrator  credentials for your Office 365 subscription (tenant)" -ForegroundColor Cyan -BackgroundColor Black

#Connect or install block
try{
    Connect-ExchangeOnline -ea Stop
}
Catch{
    $y= Read-Host "We have discovered that you don't have the required Module Installed, would you like to install it now? (Requires that your running session to be ran as administrator) (y/n): "
    if($y -like "*y*"){
        Install-Module ExchangeOnlineManagement -AllowClobber -Force
    }
    else{
        Write-Host "Exiting since you denieid the installation or used an invalid answer." -ForegroundColor Red
        exit -1
    }
    Connect-ExchangeOnline
}


#Old V4 connection
<#
$UserCredential = Get-Credential 
#to avoid being asked comment above line and uncomment behind with your username and password
#$UserCredential = New-Object System.Management.Automation.PSCredential -ArgumentList "username@comain.com",("PwdinPlainText" | ConvertTo-SecureString -AsPlainText -Force)

#Remove Previous Sessions (If they're there)
Get-PSSession | Remove-PSSession -Confirm:$false

try{
    if($UserCredential){
        if($UserCredential.Password.Length -le 5){
            Write-host -ForegroundColor RED -BackgroundColor Black "ERROR: Empty password"
            Write-host -ForegroundColor Yellow "Please add a valid password, exiting."
            exit -1
        }
       
    
    Write-Host -ForegroundColor Green "Connecting to O365 with the provided credentials" 
    $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication  Basic -AllowRedirection
    
    #removing variable credential for super security
        Remove-Variable UserCredential
        Import-PSSession $Session | Out-Null
        Write-Host -ForegroundColor Magenta "Connected to O365" 
    }
    else{
        Write-Host "The credentials are empty" -ForegroundColor Red
    }
}
catch{
    Write-Host -ForegroundColor Red "$($_.Exception.Message)"
    Write-host -ForegroundColor Yellow "There was an error while trying to connecto to the office 365, please check the administrator username and password."
    exit -1
}
#>

if($PSCmdlet.ParameterSetName -eq "single"){
    #show CNAMES to be ADDED
    Write-Host "STEP 2: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "ADD these TWO CNAMES in your PUBLIC DNS control" -ForegroundColor Cyan -BackgroundColor Black
    
    try{
        $selectors = Get-DkimSigningConfig -Identity $domain | select  Selector1Cname, Selector2cname -ea Stop
    }
    catch{
        #if getting the information fails then it would need a new dkimsingingconfig for that particular domain
        Write-Host "The signing configuration was disabled enabling it now" -ForegroundColor Magenta
        New-DkimSigningConfig -DomainName $domain -Enabled $true | Out-Null
        #then get the selectors
        $selectors = Get-DkimSigningConfig -Identity $domain | select  Selector1Cname, Selector2cname
    }
    
    #r1
    Write-Host "CNAMES FOR $domain" -ForegroundColor Magenta
    Write-Host "`tHOSTNAME:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "selector1._domainkey.$($domain)" -ForegroundColor Green  #.$($_.name)" -ForegroundColor Green
    Write-Host "`tTARGET TO:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "$($selectors.Selector1Cname)" -ForegroundColor Yellow
    Write-Host "`tTTL (Time To Live): "  -NoNewline -ForegroundColor Cyan
    Write-Host "3600`n`n" -ForegroundColor Green
    #r2
    Write-Host "`tHOSTNAME:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "selector2._domainkey.$($domain)" -ForegroundColor Green  #.$($_.name)" -ForegroundColor Green
    Write-Host "`tTARGET TO:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "$($selectors.Selector2Cname)" -ForegroundColor Yellow
    Write-Host "`tTTL (Time To Live): "  -NoNewline -ForegroundColor Cyan
    Write-Host "3600`n`n" -ForegroundColor Green

    #pause
    Read-Host "Press ENTER key to continue..."
    
    #connect to o365 an enable dkim for that domain
    Write-Host "STEP 3: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "Enabling DKIM on O365, please provide Administrative account credentials for your subscription" -ForegroundColor Cyan -BackgroundColor Black
    
        $p = Get-DkimSigningConfig -Identity $domain -ea stop
    
    if(! ($p[0] |select -ExpandProperty Enabled)){
        Write-Host "Enabling DKIM signature on domain: $domain" -ForegroundColor Green
        $p[0] | set-DkimSigningConfig -enabled $true

        if( (Get-DkimSigningConfig -Identity $domain |select -ExpandProperty Enabled) -eq $true){
            Write-Host  "Success for domain $domain" -ForegroundColor Green -BackgroundColor Black
        }
        else{
            Write-Host  "Error while trying to enable the DKIM for the Domain ""$domain""" -ForegroundColor Red -BackgroundColor Black
        }
    }
    else{
        Write-Host -ForegroundColor Yellow "The DKIM Signature is already enabled on that domain: $domain" 
    }
}

if($PSCmdlet.ParameterSetName -eq "Multiple"){
 
    #show CNAMES to be ADDED
    Write-Host "STEP 2: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "ADD TWO CNAMES FOR EACH DOMAIN in your PUBLIC DNS control" -ForegroundColor Cyan -BackgroundColor Black

    
    foreach($dom in $domains){
        try{
            $selectors = Get-DkimSigningConfig -Identity $dom | select  Selector1Cname, Selector2cname

        }
        catch{
            #if getting the information fails then it would need a new dkimsingingconfig for that particular domain
            Write-Host "The signing configuration was disabled enabling it now" -ForegroundColor Magenta
            New-DkimSigningConfig -DomainName $dom -Enabled $true| Out-Null
            #then get the selectors
            $selectors = Get-DkimSigningConfig -Identity $dom | select  Selector1Cname, Selector2cname
        }
    #r1
        Write-Host "CNAMES FOR $dom" -ForegroundColor Magenta
        Write-Host "`tHOSTNAME:`t"  -NoNewline -ForegroundColor Cyan
        Write-Host "selector1._domainkey.$($dom)" -ForegroundColor Green  #.$($_.name)" -ForegroundColor Green
        Write-Host "`tTARGET TO:`t"  -NoNewline -ForegroundColor Cyan
        Write-Host "$($selectors.Selector1Cname)" -ForegroundColor Yellow
        Write-Host "`tTTL (Time To Live): "  -NoNewline -ForegroundColor Cyan
        Write-Host "3600`n`n" -ForegroundColor Green
    #r2
        Write-Host "`tHOSTNAME:`t"  -NoNewline -ForegroundColor Cyan
        Write-Host "selector2._domainkey.$($dom)"-ForegroundColor Green  #.$($_.name)" -ForegroundColor Green
        Write-Host "`tTARGET TO:`t"  -NoNewline -ForegroundColor Cyan
        Write-Host "$($selectors.Selector2Cname)" -ForegroundColor Yellow
        Write-Host "`tTTL (Time To Live): "  -NoNewline -ForegroundColor Cyan
        Write-Host "3600`n`n" -ForegroundColor Green
    }
    #pause
    Read-Host "Press ENTER key to continue..."
   
    #connect to o365 an enable dkim for that domain
    Write-Host "STEP 3: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "Enabling DKIM on O365, please provide Administrative account credentials for your subscription" -ForegroundColor Cyan -BackgroundColor Black
    
    foreach($dom in $domains){
        $p = Get-DkimSigningConfig -Identity $dom -ea stop
        Write-Host -ForegroundColor Magenta "Connected to O365" 
    
        if(! ($p[0] |select -ExpandProperty Enabled)){
            Write-Host "Enabling DKIM signature on domain: $dom" -ForegroundColor Green
            $p[0] | set-DkimSigningConfig -enabled $true

            if( (Get-DkimSigningConfig -Identity $dom |select -ExpandProperty Enabled) -eq $true){
                Write-Host  "Success for domain $dom" -ForegroundColor Green -BackgroundColor Black
            }
            else{
                Write-Host  "Error while trying to enable the DKIM for the Domain ""$dom""" -ForegroundColor Red -BackgroundColor Black
            }
            
        }
        else{
            Write-Host "The DKIM Signature is already enabled on that domain: $dom" -ForegroundColor Yellow
        }
    }
}

if($PSCmdlet.ParameterSetName -eq "JustEnable"){
    #show CNAMES to be ADDED
    
    Write-Host "STEP 2: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "ADD TWO CNAMES FOR EACH DOMAIN (skipped)" -ForegroundColor Cyan -BackgroundColor Black

    #connect to o365 an enable dkim for that domain
    Write-Host "STEP 3: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "Enabling DKIM on O365, please provide Administrative account credentials for your subscription" -ForegroundColor Cyan -BackgroundColor Black
    
    $isdomain = ![string]::IsNullOrEmpty($domain)

    if($isdomain){
        try{
            $p = Get-DkimSigningConfig -Identity $domain -ea stop
    
            if(! ($p[0] |select -ExpandProperty Enabled)){
                Write-Host "Enabling DKIM signature on domain: $domain" -ForegroundColor Green
                $p[0] | set-DkimSigningConfig -enabled $true
                if( (Get-DkimSigningConfig -Identity $domain |select -ExpandProperty Enabled) -eq $true){
                    Write-Host  "Success for domain $domain" -ForegroundColor Green -BackgroundColor Black
                }
                else{
                    Write-Host  "Error while trying to enable the DKIM for the Domain ""$domain""" -ForegroundColor Red -BackgroundColor Black
                }
            }
            else{
                Write-Host -ForegroundColor Yellow "The DKIM Signature is already enabled on that domain: $domain" 
            }
        }
        catch{
            Write-Host -ForegroundColor Red -BackgroundColor Black "There was an error, please check:`n-> Wrong Credentials `n->The current Domain: ""$domain"" doesn't exists in your O365 account`n`t Go ahead and add it first: https://www.youtube.com/watch?v=DoRRkYlgTjI" 
            exit -1
        }
    }
    else{
        try{
            foreach($dom in $domains){
                $p = Get-DkimSigningConfig -Identity $dom -ea stop
                Write-Host -ForegroundColor Magenta "Connected to O365" 
    
                if(! ($p[0] |select -ExpandProperty Enabled)){
                    Write-Host "Enabling DKIM signature on domain: $dom" -ForegroundColor Green
                    $p[0] | set-DkimSigningConfig -enabled $true

                    if( (Get-DkimSigningConfig -Identity $dom |select -ExpandProperty Enabled) -eq $true){
                        Write-Host  "Success for domain $dom" -ForegroundColor Green -BackgroundColor Black
                    }
                    else{
                        Write-Host  "Error while trying to enable the DKIM for the Domain ""$dom""" -ForegroundColor Red -BackgroundColor Black
                    }
                }
                else{
                    Write-Host "The DKIM Signature is already enabled on that domain: $dom" -ForegroundColor Yellow
                }
            }
        }
        catch{
            Write-Host "There was an error, please check:`n-> Wrong Credentials `n->The current Domain: ""$dom"" doesn't exists in your O365 account`n`t Go ahead and add it first: https://www.youtube.com/watch?v=DoRRkYlgTjI" -ForegroundColor Red -BackgroundColor Black
        }
    }
}

if($PSCmdlet.ParameterSetName -eq "All"){
 
# EnableAllCustomDomain

$allDomains= Get-DkimSigningConfig | select Domain,Selector1CNAME,Selector2CNAME,enabled |where {$_.Domain -notlike "*onmicrosoft.com" -and $_.Enabled -eq $false}
$allDomains  | Group-Object domain |foreach{
    try{
        $selectors = Get-DkimSigningConfig -Identity $domain | select  Selector1Cname, Selector2cname -ea Stop
    }
    catch{
        #if getting the information fails then it would need a new dkimsingingconfig for that particular domain
        Write-Host "The signing configuration was disabled enabling it now" -ForegroundColor Magenta
        New-DkimSigningConfig -DomainName $domain -Enabled $true | Out-Null
        #then get the selectors
        $selectors = Get-DkimSigningConfig -Identity $domain | select  Selector1Cname, Selector2cname
    }



    Write-Host "CNAMES FOR $($_.name)" -ForegroundColor Magenta
    Write-Host "`tHOSTNAME:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "selector1._domainkey.$($_.name)" -ForegroundColor Green  #.$($_.name)" -ForegroundColor Green
    Write-Host "`tTARGET TO:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "$($_.Group.Selector1cname)" -ForegroundColor Yellow
    Write-Host "`tTTL (Time To Live): "  -NoNewline -ForegroundColor Cyan
    Write-Host "3600`n`n" -ForegroundColor Green

    Write-Host "`tHOSTNAME:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "selector2._domainkey.$($_.name)" -ForegroundColor Green  #.$($_.name)" -ForegroundColor Green
    Write-Host "`tTARGET TO:`t"  -NoNewline -ForegroundColor Cyan
    Write-Host "$($_.Group.Selector2cname)" -ForegroundColor Yellow
    Write-Host "`tTTL (Time To Live): "  -NoNewline -ForegroundColor Cyan
    Write-Host "3600`n`n" -ForegroundColor Green
}

    Read-Host "Press ENTER key to continue..."

    #connect to o365 an enable dkim for that domain
    Write-Host "STEP 3: " -ForegroundColor White -BackgroundColor Black -NoNewline
    Write-Host "Enabling DKIM on O365, please provide Administrative account credentials for your subscription" -ForegroundColor Cyan -BackgroundColor Black
    
        foreach($dom in $allDomains.Domain){
            $p = Get-DkimSigningConfig -Identity $dom -ea stop
            Write-Host -ForegroundColor Magenta "Connected to O365" 
            
    
            if(! ($p[0] |select -ExpandProperty Enabled)){
                Write-Host "Enabling DKIM signature on domain: $dom" -ForegroundColor Green
                try{
                    #TODO make cmdlet to fill out the errorvariable.
                    $p[0] | set-DkimSigningConfig -enabled $true
                    
                    if( (Get-DkimSigningConfig -Identity $dom |select -ExpandProperty Enabled) -eq $true){
                        Write-Host  "Success for domain $dom" -ForegroundColor Green -BackgroundColor Black
                    }
                    else{
                        Write-Host  "Error while trying to enable the DKIM for the Domain ""$dom""" -ForegroundColor Red -BackgroundColor Black
                    }
                }
                catch{
                    Write-Host "There was an error, please check:`nCurrent Domain: ""$dom"" $($_.exception.message)" -ForegroundColor Red -BackgroundColor Black
                }
            }
            else{
                Write-Host "The DKIM Signature is already enabled on that domain: $dom" -ForegroundColor Yellow
            }
    
        }
    Remove-Variable Alldomains
}
#cleanUP, if script is successfull will hit this point, elsewhere it will let the session open that's the reason of the line 62 

#removing All posible PSSession for security
Write-Host "Cleaning up Sessions and Exiting" -ForegroundColor Green

Get-PSSession | Remove-PSSession -Confirm:$false



