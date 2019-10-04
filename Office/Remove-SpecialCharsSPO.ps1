<#
.Synopsis
   Rename All files to match Onedrive and Sharepoint Online Guidelines
.DESCRIPTION
   Rename All files to match Onedrive and Sharepoint Online Guidelines
.EXAMPLE
   .\Remove-SpecialCharsSPO.ps1 -path "C:\Users\mark\Onedrive" -deep 4
   Will search on Mark's onedrive from root to 4 subdirectories deep and rename all special chars.
.INPUTS
   Path => Onedrive default Path or any other that you want.
   Deep => Integer that says how deep you would go into the Onedrive folders.
.OUTPUTS
   Log file at the root where you run the script with name "SpecialChars.log
.NOTES
   General notes
.COMPONENT
   This cmdlet doesn't belongs to any component
.ROLE
   Remove unwanted chars from your Onedrive
.FUNCTIONALITY
   Check Synopsis
#>
[CmdletBinding()]
Param(
    # Param1 help description
    [Parameter(Mandatory=$false,ValueFromPipeline=$true,ValueFromPipelineByPropertyName=$true,Position=0)]
    $path="$env:USERPROFILE\OneDrive",
    [Parameter(Mandatory=$false,ValueFromPipelineByPropertyName=$true,Position=1)][int]$deep=3
)

#functions
function Write-Log{
    [CmdletBinding()]
    #[Alias('wl')]
    [OutputType([int])]
    Param(
            # The string to be written to the log.
            [Parameter(Mandatory=$true, ValueFromPipelineByPropertyName=$true, Position=0)] [ValidateNotNullOrEmpty()] [Alias("LogContent")] [string]$Message,
            # The path to the log file.
            [Parameter(Mandatory=$false, ValueFromPipelineByPropertyName=$true,Position=1)] [Alias('LogPath')] [string]$Path=$global:DefaultLog,
            [Parameter(Mandatory=$false, ValueFromPipelineByPropertyName=$true,Position=2)] [ValidateSet("Error","Warn","Info","Load","Execute")] [string]$Level="Info",
            [Parameter(Mandatory=$false)] [switch]$NoClobber
    )

     Process{
        
        if ((Test-Path $Path) -AND $NoClobber) {
            Write-Warning "Log file $Path already exists, and you specified NoClobber. Either delete the file or specify a different name."
            Return
            }

        # If attempting to write to a log file in a folder/path that doesn't exist
        # to create the file include path.
        elseif (!(Test-Path $Path)) {
            Write-Verbose "Creating $Path."
            $NewLogFile = New-Item $Path -Force -ItemType File
            }

        else {
            # Nothing to see here yet.
            }

        # Now do the logging and additional output based on $Level
        switch ($Level) {
            'Error' {
                Write-Warning $Message
                Write-Output "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") ERROR: `t $Message" | Out-File -FilePath $Path -Append
                }
            'Warn' {
                Write-Warning $Message
                Write-Output "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") WARNING: `t $Message" | Out-File -FilePath $Path -Append
                }
            'Info' {
                Write-Host $Message -ForegroundColor Green
                Write-Verbose $Message
                Write-Output "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") INFO: `t $Message" | Out-File -FilePath $Path -Append
                }
            'Load' {
                Write-Host $Message -ForegroundColor Magenta
                Write-Verbose $Message
                Write-Output "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") LOAD: `t $Message" | Out-File -FilePath $Path -Append
                }
            'Execute' {
                Write-Host $Message -ForegroundColor Green
                Write-Verbose $Message
                Write-Output "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") EXEC: `t $Message" | Out-File -FilePath $Path -Append
                }
            }
    }
}
function ContainsSpecialChar{
    [cmdletbinding()]
    param(
        [Parameter(Mandatory=$true,Position=0)]$FileName
    )
    begin{
        [regex]$regex = New-Object System.Text.RegularExpressions.Regex -ArgumentList "'|@|""|\/|\\|<|>|\||\:|\*|\,|~|\?|\&"
    }
    end{
        return $($regex.IsMatch($FileName))
    }
}

#GLOBALs 
$global:ScriptLocation = $(get-location).Path
$global:DefaultLog = "$global:ScriptLocation\SpecialChars.log"
[Regex]$re = New-object System.Text.RegularExpressions.Regex -argumentlist "[:*\\/*?\""\<\>\|&,~@]"

if(!( Test-Path $path)){
    Write-Error "The default path doesn't exists ""$path""\nPlease provide a valid path with the parameter -path."
    exit -1;
}
Write-Log -Level Execute "Getting Files into the desired path $path"
$Allfiles = Get-ChildItem -Path $path -File -Depth $deep -Recurse

foreach($file in $Allfiles){
    if(ContainsSpecialChar -FileName $file.Name){
        $newname= $re.Replace($file.Name,"")
        $newFullName = "$($file.DirectoryName)\$newname"
        if(Test-Path $newFullName){
            Write-Log -Level Error "unable to rename since the target name already exists $($file.Name) => $newname"
        }
        else{
            write-log -Level Info "renaming $($file.FullName) by $newFullName"
            Rename-Item $file.FullName $newFullName
        }
    }
}
