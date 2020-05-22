$bearer="0dfb4fc1ca6e72d798e06ddca2921d926fc5405f77e4931157cbd9c4f6a82443"

$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Authorization","Bearer $bearer")

$SaveFile = "D:\PhotoStats.json"
$ReCreateVariable = Get-Content $SaveFile | ConvertFrom-Json

foreach($picture in $ReCreateVariable){


}