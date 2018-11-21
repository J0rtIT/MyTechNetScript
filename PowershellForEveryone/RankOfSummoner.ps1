<#
.Synopsis
   Get Rank and LP of  summoner level of a active summoner for League Of Legend on any region
.DESCRIPTION
   Do a Query into a OP.GG website and do Web scraping to get the current Level and LP
.EXAMPLE
   Get-RankOfSummoner.ps1 -SummonerName j0rt
.EXAMPLE
   Get-RankOfSummoner.ps1 j0rt
.INPUTS
   SummonerName
.OUTPUTS
   Summoner Level and LP
.NOTES
    The Technet URL is: https://gallery.technet.microsoft.com/scriptcenter/PowershellForEveryone-Get-46ef8893
    Youtube Video of how to use the script: 
    Youtube Video of how to use the script: 
.COMPONENT
   This script doesn't belong to any component
.ROLE
   This script doesn't belong to any Role
.FUNCTIONALITY
   Do a Query into a OP.GG website and do Web scraping to get the current Level and LP
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory=$true,Position=0,ValueFromPipeline=$true)]
    [ValidateNotNullOrEmpty()]
    $SummonerName,

    [Parameter(Mandatory=$false,Position=1,ValueFromPipeline=$true)]
    [ValidateSet("na","lan","las","jp","euw","eune","oce","br","ru","tr","th")]
    $region="na"
)

#Source: https://blogs.msdn.microsoft.com/luisdem/2016/02/09/browsing-in-internet-explorer-via-powershell/
$IE= New-Object -ComObject "InternetExplorer.Application"
$IE.navigate2(“http://$region.op.gg/summoner/userName=$SummonerName")

 while ($IE.busy) {
     start-sleep -Seconds 1
 } 

 $rank = $IE.Document.getElementsByClassName("tierRank");
 $LP = $IE.Document.getElementsByClassName("LeaguePoints") | select -ExpandProperty innerText;

 Write-Host -ForegroundColor Magenta "The current rank of $SummonerName is $($rank | select -ExpandProperty TextContent) $LP"
 
 #Source: https://stackoverflow.com/questions/30642883/how-to-properly-close-internet-explorer-when-launched-from-powershell
 #Close the object
 #Search on the shell application for any Internet Explorer process
 (New-Object -COM 'Shell.Application').Windows() | Where-Object {
    $_.Name -like '*Internet Explorer*'
} | ForEach-Object {
    #then close it
    $_.Quit() 
    #and realease the comobject
    [Runtime.Interopservices.Marshal]::ReleaseComObject($_) | Out-Null
}
#Just in case finalize the GC (Garbage Collector)
#This returns the memory utilized to the system
[GC]::Collect()
[GC]::WaitForPendingFinalizers()
