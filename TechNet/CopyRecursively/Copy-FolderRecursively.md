.Synopsis
   Copy Files from a source Folder to a Destination recursively using powershell
.DESCRIPTION
   Copy Files from a source Folder to a Destination recursively and setting up the date attributes equals to the original file (and folders), and preserving permissions (optional) from the source folders to target ones using PowerShell
.EXAMPLE
   Copy-FolderRecursively.ps1 -source "D:\CloudOD\OneDrive\Soporte Curriculum" -target "D:\Cloud\Dropbox\Desktop\destTest"
   Default Behavior, copy all from folder 'source' to the destination, preserving dates within the files and folders. Receiving 1 notification each 10 files moved/existing

.EXAMPLE
   Copy-FolderRecursively.ps1 -source "D:\CloudOD\OneDrive\Soporte Curriculum" -target "D:\Cloud\Dropbox\Desktop\destTest" -NTFS
   Default Behavior, copy all from folder 'source' to the destination, preserving dates within the files and folders. Receiving 1 notification each 10 files moved/existing, and the -NTFS switch will preserve the NTFS permissions between the 2 folders.

.EXAMPLE
   Copy-FolderRecursively.ps1 -source "D:\CloudOD\OneDrive\Soporte Curriculum" -target "D:\Cloud\Dropbox\Desktop\destTest" -NFiles 50 
   Same as previously but with less notifications. (1 notification each 50 files Moved/Existing

.EXAMPLE
   Copy-FolderRecursively.ps1 -source "D:\CloudOD\OneDrive\Soporte Curriculum" -target "F:\CopyTest"  -NoMatch "MVA"
   Copy all folders that doesn't contains the "MVA" string (no case sensitive) from source to target.

.EXAMPLE
    Copy-FolderRecursively.ps1 -source "D:\CloudOD\OneDrive\Soporte Curriculum" -target "F:\CopyTest"  -Match "MS" -Nfiles 5
    Copy all folders from source to target that contains "MS" in the name (meaning that Mathes ms).
.EXAMPLE
    Copy-FolderRecursively.ps1 -source "D:\CloudOD\OneDrive\Soporte Curriculum" -target "F:\CopyTest"  -NoMatch "MVA" -NFiles 100
    Copy all the files that doesn't match "MVA" in the name. And obtain a notification each 100 files.

.INPUTS
    Mandatory
    Source: Source Folder Path
    Target: Target Folder path

    Optionals
    NTFS: It's the paremeter that execute the copy of the NTFS privilegies from source to target.
    NFiles: Integer, When you're moving a lot of data, set this variable to get a notification each "NFILES", the bigger (less frequent), the less (more frequent). Default value 10. So each 10 files moved you'll get 1 notification
    Match (Name or partial string): Matches the 1sti folder with this pattern and start copying from there. (Persist the folders structure in the new target
    NoMatch: Save every folder except those that maches the $NoMatch string.

.OUTPUTS
   The only output is a log file "copy.log" within the same path of the script
.NOTES
   Autor: Jose Gabriel Ortega C.
   Version: 1.0
   Release date: 11/07/2017
   Version: 2.0
   Release Date 11/12/2017
.COMPONENT
   This script doesn't belongs to any component
.ROLE
   This cmdlet doesn't belongs to any role 
.FUNCTIONALITY
   This CMDLET is similar to xcopy apply robocopy but with setting up the Date (Creation,Modify) in the new file.