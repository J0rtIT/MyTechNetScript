#https://gallery.technet.microsoft.com/Get-Bearer-Token-to-use-360f9ae2##|
[Cmdletbinding()]
param(                                                                          
    [Parameter(Mandatory=$false,ValueFromPipeline=$true,Position=0)]$ClientId =   'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    [Parameter(Mandatory=$false,ValueFromPipeline=$true,Position=1)]$ClientSecret='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
)

#Do not change this 
$global:ClientId = $ClientId    
$global:clientsecret = $ClientSecret
$global:RedirectUri = 'https%3A%2F%2Flocalhost%3A63437%2Fsignin-unsplash%2F'

Function Show-OAuth2Window {
    [cmdletbinding()]
    param(
        [System.Uri]$Url
    )

    Add-Type -AssemblyName System.Windows.Forms

    $form = New-Object -TypeName System.Windows.Forms.Form -Property @{Width=1080;Height=840}
    $web = New-Object -TypeName System.Windows.Forms.WebBrowser -Property @{Width=1060;Height=820;Url=($url ) }
    $DocComp = {
        $Global:uri = $web.Url.AbsoluteUri
        if ($Global:Uri -match "error=[^&]*|code=[^&]*") {$form.Close() }
    }
    
    $web.ScriptErrorsSuppressed = $true
    $web.Add_DocumentCompleted($DocComp)
    $form.Controls.Add($web)
    $form.Add_Shown({$form.Activate()})
    $form.ShowDialog() | Out-Null
    $queryOutput = [System.Web.HttpUtility]::ParseQueryString($web.Url.Query)
    $output = @{}
    foreach($key in $queryOutput.Keys){
        $output["$key"] = $queryOutput[$key]
    }
    return $output
    #Write-Output $output
   #Write-Verbose $($web.Url.Query)
}

Function Get-OAuth2Authorization {
    <#
    .SYNOPSIS
    Gets OAuth2 Authorization code
    
    #>
    [cmdletbinding()]
    Param (
        #public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections
        $AuthPage = "https://unsplash.com/oauth/authorize?client_id=$global:clientId&redirect_uri=$global:RedirectUri&response_type=code&scope=public+read_user+read_photos+write_likes+write_followers+read_collections"
    )
    
    # Start login
    Add-Type -AssemblyName System.Web
    $loginUrl = "$AuthPage"
    
    Try {
        $queryOutput = Show-OAuth2Window -Url $loginUrl -Verbose
      
    } 
    Catch {
        Write-error $_.Exception.Message
    }
    return $queryOutput.code`
}
#Using the Authorization Code to Get Tokens
Function Get-OAuth2Token {
    [cmdletbinding()]
    Param(
        [parameter(Mandatory=$false,Position=1)]$Uri ='https://unsplash.com/oauth/token',
        [parameter(Mandatory=$true,Position=0)]$authcode
    )

    Try{
        $uri="$Uri/?client_id=$global:ClientId&client_secret=$global:clientsecret&redirect_uri=$global:RedirectUri&grant_type=authorization_code&code=$authcode"
        Return Invoke-RestMethod -Method Post -Uri $Uri 
    }
    Catch {
        Write-host "Error occured while using: `n$uri"
        Write-host "Exception Message: $($_.Exception.Message)"
    }
}


Write-host -ForegroundColor Cyan "Getting the Authorization Code" -NoNewline
$code = Get-OAuth2Authorization
Write-host -ForegroundColor Green "`t Done" 

Write-host -ForegroundColor Cyan "Getting Beared Token Code" -NoNewline
$tmp = Get-OAuth2Token -authcode $code
Write-host -ForegroundColor Green "`t Done" 

if($tmp){
    $tmp  | fl        
}
else{
    Write-Host "There was an error on the request" -ForegroundColor Red
    exit -1
}
