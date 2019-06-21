# What would this script do for me?

It would do the OAuth 2.0 handshake process to get your Bearer token.

 

# Unsplash API bore token?. What's that?
Basically, after an OAuth 2.0 process, you'd get a sequence of chars which allow your queries to the Unsplash API to authenticate your queries. These tokens don't expire,  allowing you can use that in your application, the whole idea is to simplify the process of getting a token and use it.

# Sounds great, how do I use it?
The first step is to change the ExecutionPolicy to Unrestricted, so:

 

 

```PowerShell
Set-ExecutionPolicy Unrestricted
 ```
 


Moreover, then you have 2 options:

* *Use the 2 parameters (ClientID and client Clientsecret), that you obtain directly from the Web API after registering an App (https://unsplash.com/documentation). Like this:**

 

 

```PowerShell
.\Do-Oath20forUnsplash.ps1 -Clientid "<yourclientId>" -ClientSecret "<yourclientsecret>"
 ```
 

*Open the script, and change lines 2 and 3 to add your ClientId and your ClientSecret and then run the script without parameters.*

 
 

```PowerShell
.\Do-Oath20forUnsplash.ps1
```

# What's the output of the script

![Alt desc](https://gallery.technet.microsoft.com/site/view/file/222533/1/output.png)
 

# Ok, I've got the Token, now, how do I use it?
As explained on the [Unsplash API reference](https://unsplash.com/documentation#authorization-workflow) On subpoint 4, you can use the authorization  property with the value "bearer <access code>"

 

Authorization: Bearer ACCESS_TOKEN
Also, execute any query on the pictures that you have on the scope.

 

Thank you very much for downloading and please do not forget to rate, or propose if you have another idea.

# Powershell is my hobby