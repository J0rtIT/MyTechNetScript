$bearer="Changefor your bearer token"

#region ME
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Authorization","Bearer $bearer")
$me = Invoke-WebRequest -Uri https://api.unsplash.com/me  -Headers $headers
#endregion

#Transform JSON content into Powershell Object
$MePSObject = $me.Content | ConvertFrom-Json


$MePSObject = $me.Content | ConvertFrom-Json

#get total pictures
$totalPhotos = $me.Content | ConvertFrom-Json | select -ExpandProperty total_photos

#Do some math (total Pictures / 30 = Number of pages)
$pages = [math]::Ceiling( $totalPhotos / 30)


$obj=@()
for($i=1; $i -le $pages;$i++){
    Start-Sleep -Seconds 1
    $obj+= Invoke-WebRequest -Uri "https://api.unsplash.com/users/j0rt/photos?per_page=30&page=$i&order_by=latest&stats=true" -Headers $headers | select -ExpandProperty Content | ConvertFrom-Json # | select Downloads,Views,Likes
}

#obj.count 763
$SaveFile = "PhotoStats.json"
Write-Host -ForegroundColor Green "Total Objects on OBJ var are $($obj.Count)"
$obj | ConvertTo-Json | Out-File  $SaveFile
$ReCreateVariable = Get-Content $SaveFile | ConvertFrom-Json

Write-Host -ForegroundColor Cyan "Total Objects on ""RecreateVariable"" var are $($ReCreateVariable.Count)"


$otro = Invoke-WebRequest -Uri https://api.unsplash.com/users/j0rt/statistics  -Headers $headers | select -ExpandProperty Content | ConvertFrom-Json | select Downloads,Views,Likes


$NewVar = New-Object -TypeName psobject -Property @{"descargas" = $otro.downloads.total ; "vistas" = $otro.views.total ; "Likes" = $otro.likes.total}

