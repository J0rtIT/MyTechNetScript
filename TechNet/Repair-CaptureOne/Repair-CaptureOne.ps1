
#Close the C1 softweare
$processOpen = Get-Process | where { $_.Name -like "*CaptureOne*"}
if($processOpen){
    #close
    $processOpen | Stop-Process 
}


$Version = gci -Directory $env:APPDATA\..\local\CaptureOne\ImageCore | select -ExpandProperty Name
$filePath = "$env:APPDATA\..\local\CaptureOne\ImageCore\$Version"
gci -File $filePath | %{write-host -ForegroundColor Green "Removing File at $($_.FullName)"; Remove-Item -Force $_.FullName -Confirm:$false}

Write-Warning "Now you can Open up you Capture One 1 again and process your images normally"