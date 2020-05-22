[Cmdletbinding()]
param(
	Parameter(mandatory=$false,position=0)[switch]$TLS12

#como enviar un correo desde powershell usando tu cuenta gmail:

if($TLS12){
	try{
		[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
	}
	catch{
		[System.Net.ServicePointManager]::SecurityProtocol = 'TLS12'
	}
}

Write-host -foregroundcolor Cyan "Make sure to visit and allow ""less secure apps"" in this link for the script to run successfully https://myaccount.google.com/lesssecureapps"
Write-host -foregroundcolor Cyan "Or go to: Account/Security/LessSecureApps"

#Modify Accordingly
$From = "jortega928@gmail.com"
$To = "jortega@faboit.com"
#$Attachment = "C:\temp\Some random file.txt"
$Subject = "Email Subject From Powershell Script"
$Body = "<h1>Hello from Powershell Stream</h1><h3>It really works</h3>"
$SMTPServer = "smtp.gmail.com"
$SMTPPort = "587"

#$creds = Get-Credential
Send-MailMessage -From $From -to $To -Subject $Subject -Body $Body -SmtpServer $SMTPServer -port $SMTPPort -Credential $creds -UseSsl -BodyAsHtml #-Attachments $Attachment