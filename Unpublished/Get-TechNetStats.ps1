#$executingPath=$(get-location).Path
$txtUrlLocation = "D:\ghcode\j0rt3g4\MyTechNetScript\AllURLs.txt"
$Readme =  "D:\ghcode\j0rt3g4\MyTechNetScript\READMEPS.md"
$FolderProcessFiles = "F:\Stats"
#$downloadFolder = "$env:userprofile\downloads"
$downloadFolder =  "D:\Libs\Download"


function Create-FolderIfNotExists{
    [Cmdletbinding()]
    Param(
        [Parameter(Mandatory=$true,Position=0)]$CPath
    )
    if(!(Test-path $CPath)){
        Write-Host -ForegroundColor Cyan "Creating Folder $CPath"
        New-item -ItemType Directory -Path $CPath | Out-Null
    }
}

###################
#Get Files
####################

Create-FolderIfNotExists -CPath $FolderProcessFiles
$AllFiles = Get-Content $txtUrlLocation

$AllFiles | %{
    if(!($_ -like "#*")){
        $url = "$($_)/stats/download"
        $output = "$FolderProcessFiles\" + $($_.split('/')[-1]) + ".csv"
        [System.Diagnostics.Process]::Start($url)
    }
}

Start-Sleep -s 15

#remove duplicates
gci -file -Recurse $downloadFolder -Filter *.csv | where{ $_.Name -like "*(*)*"}| %{
    remove-item $_.FullName -Confirm:$false
}

#copy
Foreach($item in gci $downloadFolder -Filter *.csv){
    if(!(Test-path "$FolderProcessFiles\$($item.Name)")){
        Move-item $item.FullName $FolderProcessFiles -Force -Confirm:$false    
      
    }
    else{
        Remove-item $item.FullName -Confirm:$false
    }
}


$sbuilder= [System.Text.StringBuilder]::new()
$sbuilder.AppendLine("# Directory / Directorio\n")
$sbuilder.AppendLine("| Publish Date | Name  |  URL  | Repository Location | PageViews | PageViews(Max) | PageViews(Avg) | Downloads | Downloads(Max) | Downloads(Avg)  |  ")


gci -File -Path $FolderProcessFiles | %{
    $csv = Import-Csv $_.FullName
    $StrToMatch = $_.Name.Split('_')[0]
    $PVstats = $csv | Measure-Object "Page Views" -Sum -Average -Maximum -Minimum
    $DLstats = $csv | Measure-Object "Downloads" -Sum -Average -Maximum -Minimum
    $PublishDate = $csv | select -first 1 | select -ExpandProperty Date
    $url = $AllFiles | %{ if($_ -like "*$StrToMatch*" -and !($_ -like "#*")){ $_}}
    $sbuilder.AppendLine("| $PublishDate | $($_.Name)  |  $url  | Repository Location | $($PVstats.SUM) | $($PVstats.Maximum) | $($PVstats.Average) | $($DLstats.SUM) | $($DLstats.Maximum) | $($DLstats.Average) |  ")
}

$sbuilder.ToString() | Out-File $Readme
