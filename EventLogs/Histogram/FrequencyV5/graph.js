
	var chart;
	var SystemData =[
    {
        "FirstTimeWritten":  "8/10/2018 10:48:06 AM",
        "Count":  2668,
        "EventID":  10016,
        "color":  "#851818",
        "LastTimeWritten":  "11/26/2018 11:29:31 PM",
        "Source":  "DCOM",
        "EntryType":  1,
        "Message":  "The description for Event ID \u002710016\u0027 in Source \u0027DCOM\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027application-specific\u0027, \u0027Local\u0027, \u0027Activation\u0027, \u0027{D63B10C5-BB46-4990-A94F-E40B9D520160}\u0027, \u0027{9CA88EE3-ACB7-47C8-AFC4-AB702511C276}\u0027, \u0027NT AUTHORITY\u0027, \u0027LOCAL SERVICE\u0027, \u0027S-1-5-19\u0027, \u0027LocalHost (Using LRPC)\u0027, \u0027Unavailable\u0027, \u0027Unavailable\u0027"
    },
    {
        "FirstTimeWritten":  "8/16/2018 7:09:43 PM",
        "Count":  1217,
        "EventID":  225,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/12/2018 5:06:37 PM",
        "Source":  "Microsoft-Windows-Kernel-PnP",
        "EntryType":  2,
        "Message":  "The application \\Device\\HarddiskVolume8\\Users\\Jose\\AppData\\Local\\Microsoft\\Teams\\current\\Teams.exe with process id 9940 stopped the removal or ejection for the device USB\\VID_0951\u0026PID_16A4\u0026MI_03\\6\u00263321d09b\u00260\u00260003."
    },
    {
        "FirstTimeWritten":  "8/11/2018 9:55:41 AM",
        "Count":  847,
        "EventID":  10010,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/26/2018 1:27:28 AM",
        "Source":  "DCOM",
        "EntryType":  1,
        "Message":  "The description for Event ID \u002710010\u0027 in Source \u0027DCOM\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027{9BA05972-F6A8-11CF-A442-00A0C90A8F39}\u0027"
    },
    {
        "FirstTimeWritten":  "8/10/2018 2:51:33 PM",
        "Count":  468,
        "EventID":  22,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/26/2018 11:09:23 AM",
        "Source":  "Microsoft-Windows-Hyper-V-VmSwitch",
        "EntryType":  2,
        "Message":  "Media disconnected on NIC /DEVICE/{48B96D3A-0222-4222-B5F8-98511DC8FFA0} (Friendly Name: Intel(R) Ethernet Connection (2) I219-V)."
    },
    {
        "FirstTimeWritten":  "8/10/2018 2:51:31 PM",
        "Count":  288,
        "EventID":  263,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/26/2018 1:27:30 AM",
        "Source":  "Win32k",
        "EntryType":  2,
        "Message":  "A pointer device has no information about the monitor it is attached to."
    },
    {
        "FirstTimeWritten":  "8/11/2018 2:13:56 AM",
        "Count":  190,
        "EventID":  1014,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/26/2018 11:17:47 AM",
        "Source":  "Microsoft-Windows-DNS-Client",
        "EntryType":  2,
        "Message":  "Name resolution for the name cert.startcom.org timed out after none of the configured DNS servers responded."
    },
    {
        "FirstTimeWritten":  "8/12/2018 3:34:39 PM",
        "Count":  98,
        "EventID":  219,
        "color":  "#851818",
        "LastTimeWritten":  "11/23/2018 10:57:22 AM",
        "Source":  "Microsoft-Windows-Kernel-PnP",
        "EntryType":  2,
        "Message":  "The driver \\Driver\\WudfRd failed to load for the device ROOT\\WPD\\0000."
    },
    {
        "FirstTimeWritten":  "8/11/2018 12:51:19 PM",
        "Count":  78,
        "EventID":  269,
        "color":  "#8ACE8A",
        "LastTimeWritten":  "11/23/2018 10:57:30 AM",
        "Source":  "Microsoft-Windows-Hyper-V-VmSwitch",
        "EntryType":  1,
        "Message":  "Failed to get Device VlanID Regkey for Physical NIC /DEVICE/{48B96D3A-0222-4222-B5F8-98511DC8FFA0}. vSwitch will be created on this Physical NIC without VlanID being inherited by HostVNic. Status = 3221225524"
    },
    {
        "FirstTimeWritten":  "8/15/2018 9:01:24 AM",
        "Count":  74,
        "EventID":  157,
        "color":  "#136B13",
        "LastTimeWritten":  "11/23/2018 10:57:18 AM",
        "Source":  "Microsoft-Windows-Hyper-V-Hypervisor",
        "EntryType":  2,
        "Message":  "The hypervisor did not enable mitigations for CVE-2018-3646 for virtual machines because HyperThreading is enabled and the hypervisor core scheduler is not enabled. To enable mitigations for CVE-2018-3646 for virtual machines, enable the core scheduler by running \"bcdedit /set hypervisorschedulertype core\" from an elevated command prompt and reboot."
    },
    {
        "FirstTimeWritten":  "8/27/2018 3:35:02 PM",
        "Count":  53,
        "EventID":  27,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/21/2018 6:47:11 PM",
        "Source":  "e1iexpress",
        "EntryType":  2,
        "Message":  "Intel(R) Ethernet Connection (2) I219-V\r\n\r\nNetwork link is disconnected.\r\n"
    },
    {
        "FirstTimeWritten":  "8/11/2018 10:18:49 AM",
        "Count":  40,
        "EventID":  10028,
        "color":  "#022E38",
        "LastTimeWritten":  "9/21/2018 10:50:53 PM",
        "Source":  "DCOM",
        "EntryType":  1,
        "Message":  "The description for Event ID \u002710028\u0027 in Source \u0027DCOM\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027faboitdbs\u0027, \u0027    5624\u0027, \u0027C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\ManagementStudio\\Ssms.exe\u0027, \u0027{8BC3F05E-D86B-11D0-A075-00C04FB68820}\u0027"
    },
    {
        "FirstTimeWritten":  "8/11/2018 12:51:32 PM",
        "Count":  30,
        "EventID":  6008,
        "color":  "#275E6C",
        "LastTimeWritten":  "11/9/2018 12:23:01 AM",
        "Source":  "EventLog",
        "EntryType":  1,
        "Message":  "The previous system shutdown at 12:21:27 AM on ‎11/‎9/‎2018 was unexpected."
    },
    {
        "FirstTimeWritten":  "8/12/2018 7:06:40 PM",
        "Count":  19,
        "EventID":  7000,
        "color":  "#FFD5AB",
        "LastTimeWritten":  "11/14/2018 9:09:07 AM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "The Audiosrv service failed to start due to the following error: \r\n%%1069"
    },
    {
        "FirstTimeWritten":  "8/15/2018 10:17:47 PM",
        "Count":  18,
        "EventID":  7031,
        "color":  "#5A0101",
        "LastTimeWritten":  "11/26/2018 12:36:54 AM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "The Windows Push Notifications User Service_1f5eddff service terminated unexpectedly.  It has done this 1 time(s).  The following corrective action will be taken in 10000 milliseconds: Restart the service."
    },
    {
        "FirstTimeWritten":  "8/18/2018 1:29:47 PM",
        "Count":  18,
        "EventID":  1073,
        "color":  "#FFD5AB",
        "LastTimeWritten":  "11/24/2018 2:57:39 AM",
        "Source":  "User32",
        "EntryType":  2,
        "Message":  "The attempt by user DESKTOPJG\\Jose to restart/shutdown computer DESKTOPJG failed"
    },
    {
        "FirstTimeWritten":  "8/12/2018 7:06:40 PM",
        "Count":  16,
        "EventID":  7009,
        "color":  "#851818",
        "LastTimeWritten":  "11/9/2018 12:27:07 AM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "A timeout was reached (30000 milliseconds) while waiting for the GameDVR and Broadcast User Service_12a8f9 service to connect."
    },
    {
        "FirstTimeWritten":  "8/12/2018 7:07:20 PM",
        "Count":  16,
        "EventID":  76,
        "color":  "#FFD5AB",
        "LastTimeWritten":  "11/23/2018 10:57:35 AM",
        "Source":  "Microsoft-Windows-Hyper-V-VmSwitch",
        "EntryType":  1,
        "Message":  "The operation \u00272\u0027 failed on nic 0BF755F6-5BAF-4344-9156-68E20F2361E3 (Friendly Name: ). Status = 3221225485."
    },
    {
        "FirstTimeWritten":  "11/24/2018 12:29:00 PM",
        "Count":  15,
        "EventID":  51,
        "color":  "#FFABAB",
        "LastTimeWritten":  "11/24/2018 12:29:00 PM",
        "Source":  "Disk",
        "EntryType":  2,
        "Message":  "An error was detected on device \\Device\\Harddisk3\\DR3 during a paging operation."
    },
    {
        "FirstTimeWritten":  "8/16/2018 7:13:48 PM",
        "Count":  14,
        "EventID":  20,
        "color":  "#275F6C",
        "LastTimeWritten":  "10/23/2018 11:19:42 AM",
        "Source":  "Microsoft-Windows-WindowsUpdateClient",
        "EntryType":  1,
        "Message":  "Installation Failure: Windows failed to install the following update with error 0x80073d02: 9NCBCSZSJRSB-SpotifyAB.SpotifyMusic."
    },
    {
        "FirstTimeWritten":  "8/12/2018 7:06:40 PM",
        "Count":  12,
        "EventID":  10005,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/9/2018 12:27:07 AM",
        "Source":  "DCOM",
        "EntryType":  1,
        "Message":  "The description for Event ID \u002710005\u0027 in Source \u0027DCOM\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u00271053\u0027, \u0027BcastDVRUserService_12a8f9\u0027, \u0027Unavailable\u0027, \u0027Windows.Media.Capture.Internal.AppCaptureShell\u0027"
    },
    {
        "FirstTimeWritten":  "8/12/2018 7:07:21 PM",
        "Count":  10,
        "EventID":  6,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/23/2018 10:57:38 AM",
        "Source":  "Microsoft-Windows-Hyper-V-VmSwitch",
        "EntryType":  1,
        "Message":  "Failed to enable miniport NIC 0BF755F6-5BAF-4344-9156-68E20F2361E3 (Friendly Name: Default Switch), status = 3221225524."
    },
    {
        "FirstTimeWritten":  "8/12/2018 7:07:21 PM",
        "Count":  10,
        "EventID":  32,
        "color":  "#D8A26D",
        "LastTimeWritten":  "11/23/2018 10:57:38 AM",
        "Source":  "Microsoft-Windows-Hyper-V-VmSwitch",
        "EntryType":  1,
        "Message":  "Failed to connect NIC 0BF755F6-5BAF-4344-9156-68E20F2361E3 (Friendly Name: Default Switch) to port  (Friendly Name: ) on switch C08CB7B8-9B3C-408E-8E30-5E16A3AEB444 (Friendly Name: Default Switch), status = 3221225524."
    },
    {
        "FirstTimeWritten":  "10/4/2018 10:35:59 AM",
        "Count":  8,
        "EventID":  7023,
        "color":  "#275E6C",
        "LastTimeWritten":  "11/17/2018 10:59:29 PM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "The NVIDIA LocalSystem Container service terminated with the following error: \r\n%%14109"
    },
    {
        "FirstTimeWritten":  "8/12/2018 2:23:04 PM",
        "Count":  8,
        "EventID":  29,
        "color":  "#851818",
        "LastTimeWritten":  "11/7/2018 9:21:52 AM",
        "Source":  "Microsoft-Windows-Kernel-Boot",
        "EntryType":  1,
        "Message":  "The description for Event ID \u002729\u0027 in Source \u0027Microsoft-Windows-Kernel-Boot\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u00273221225684\u0027, \u0027A fatal error occurred processing the restoration data.\r\n\u0027"
    },
    {
        "FirstTimeWritten":  "8/12/2018 3:34:39 PM",
        "Count":  8,
        "EventID":  161,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "10/7/2018 9:53:24 AM",
        "Source":  "volmgr",
        "EntryType":  1,
        "Message":  "Dump file creation failed due to error during dump creation."
    },
    {
        "FirstTimeWritten":  "8/12/2018 3:32:48 PM",
        "Count":  7,
        "EventID":  4101,
        "color":  "#57AD57",
        "LastTimeWritten":  "10/10/2018 6:38:30 PM",
        "Source":  "Display",
        "EntryType":  2,
        "Message":  "Display driver nvlddmkm stopped responding and has successfully recovered."
    },
    {
        "FirstTimeWritten":  "10/9/2018 3:44:34 AM",
        "Count":  6,
        "EventID":  134,
        "color":  "#014801",
        "LastTimeWritten":  "11/7/2018 9:38:13 AM",
        "Source":  "Microsoft-Windows-Time-Service",
        "EntryType":  2,
        "Message":  "NtpClient was unable to set a manual peer to use as a time source because of DNS resolution error on \u0027time.windows.com,0x9\u0027. NtpClient will try again in 15 minutes and double the reattempt interval thereafter. The error was: No such host is known. (0x80072AF9)"
    },
    {
        "FirstTimeWritten":  "9/9/2018 10:43:36 PM",
        "Count":  6,
        "EventID":  10400,
        "color":  "#57AD57",
        "LastTimeWritten":  "11/21/2018 9:21:59 PM",
        "Source":  "Microsoft-Windows-NDIS",
        "EntryType":  2,
        "Message":  "The network interface \"Intel(R) Ethernet Connection (2) I219-V\" has begun resetting.  There will be a momentary disruption in network connectivity while the hardware resets. Reason: 3. This network interface has reset 1 time(s) since it was last initialized."
    },
    {
        "FirstTimeWritten":  "11/1/2018 8:53:06 PM",
        "Count":  5,
        "EventID":  16002,
        "color":  "#D8A26D",
        "LastTimeWritten":  "11/8/2018 10:04:44 AM",
        "Source":  "AFD",
        "EntryType":  2,
        "Message":  "Closing a TCP socket with local port number 53187 in process 14280 is taking longer than expected. The local port number may not be available until the close operation is completed. This happens typically due to misbehaving network drivers. Ensure latest updates are installed for Windows and any third-party networking software including NIC drivers, firewalls, or other security products.  "
    },
    {
        "FirstTimeWritten":  "8/22/2018 11:02:03 PM",
        "Count":  3,
        "EventID":  36882,
        "color":  "#D8A26D",
        "LastTimeWritten":  "8/22/2018 11:33:19 PM",
        "Source":  "Schannel",
        "EntryType":  1,
        "Message":  "The certificate received from the remote server was issued by an untrusted certificate authority. Because of this, none of the data contained in the certificate can be validated. The TLS connection request has failed. The attached data contains the server certificate."
    },
    {
        "FirstTimeWritten":  "9/27/2018 12:51:08 PM",
        "Count":  2,
        "EventID":  4227,
        "color":  "#AE743B",
        "LastTimeWritten":  "9/27/2018 1:02:34 PM",
        "Source":  "Tcpip",
        "EntryType":  2,
        "Message":  "TCP/IP failed to establish an outgoing connection because the selected local endpoint\r\nwas recently used to connect to the same remote endpoint. This error typically occurs\r\nwhen outgoing connections are opened and closed at a high rate, causing all available\r\nlocal ports to be used and forcing TCP/IP to reuse a local port for an outgoing connection.\r\nTo minimize the risk of data corruption, the TCP/IP standard requires a minimum time period\r\nto elapse between successive connections from a given local endpoint to a given remote endpoint."
    },
    {
        "FirstTimeWritten":  "10/4/2018 9:58:45 PM",
        "Count":  1,
        "EventID":  36,
        "color":  "#AE743B",
        "LastTimeWritten":  "10/4/2018 9:58:45 PM",
        "Source":  "volsnap",
        "EntryType":  1,
        "Message":  "The shadow copies of volume C: were aborted because the shadow copy storage could not grow due to a user imposed limit."
    },
    {
        "FirstTimeWritten":  "9/14/2018 8:59:10 AM",
        "Count":  1,
        "EventID":  10001,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "9/14/2018 8:59:10 AM",
        "Source":  "DCOM",
        "EntryType":  1,
        "Message":  "The description for Event ID \u002710001\u0027 in Source \u0027DCOM\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027\"C:\\Program Files\\WindowsApps\\microsoft.windowscommunicationsapps_16005.10730.20096.0_x64__8wekyb3d8bbwe\\HxTsr.exe\" -ServerName:Hx.IPC.Server\u0027, \u0027298\u0027, \u0027microsoft.windowscommunicationsapps_16005.10730.20096.0_x64__8wekyb3d8bbwe!microsoft.windowslive.calendar.AppXwkn9j84yh1kvnt49k5r8h6y1ecsv09hs.mca\u0027, \u0027Unavailable\u0027, \u0027Unavailable\u0027"
    },
    {
        "FirstTimeWritten":  "9/10/2018 1:24:43 AM",
        "Count":  1,
        "EventID":  4199,
        "color":  "#FFABAB",
        "LastTimeWritten":  "9/10/2018 1:24:43 AM",
        "Source":  "Tcpip",
        "EntryType":  1,
        "Message":  "The system detected an address conflict for IP address 172.16.16.3 with the system\r\nhaving network hardware address 60-45-CB-9B-28-5E. Network operations on this system may\r\nbe disrupted as a result."
    },
    {
        "FirstTimeWritten":  "11/14/2018 9:09:07 AM",
        "Count":  1,
        "EventID":  7038,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/14/2018 9:09:07 AM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "The Audiosrv service was unable to log on as NT AUTHORITY\\LocalService with the currently configured password due to the following error: \r\n%%50\r\n\r\nTo ensure that the service is configured properly, use the Services snap-in in Microsoft Management Console (MMC)."
    },
    {
        "FirstTimeWritten":  "10/7/2018 9:53:54 AM",
        "Count":  1,
        "EventID":  1001,
        "color":  "#6E98A1",
        "LastTimeWritten":  "10/7/2018 9:53:54 AM",
        "Source":  "BugCheck",
        "EntryType":  1,
        "Message":  "The description for Event ID \u00271073742825\u0027 in Source \u0027BugCheck\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u00270x0000001a (0x0000000000003600, 0xfffffe7f3f9fc000, 0x0a000002d51cd867, 0x0a00000200000021)\u0027, \u0027C:\\WINDOWS\\MEMORY.DMP\u0027, \u002700000000-0000-0000-0000-000000000000\u0027"
    },
    {
        "FirstTimeWritten":  "11/7/2018 1:36:00 PM",
        "Count":  1,
        "EventID":  16,
        "color":  "#014801",
        "LastTimeWritten":  "11/7/2018 1:36:00 PM",
        "Source":  "volsnap",
        "EntryType":  1,
        "Message":  "The shadow copies of volume G: were aborted because volume G:, which contains shadow copy storage for this shadow copy, was force dismounted."
    },
    {
        "FirstTimeWritten":  "11/16/2018 12:50:25 AM",
        "Count":  1,
        "EventID":  7034,
        "color":  "#022E38",
        "LastTimeWritten":  "11/16/2018 12:50:25 AM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "The Network Virtualization Service service terminated unexpectedly.  It has done this 1 time(s)."
    },
    {
        "FirstTimeWritten":  "11/23/2018 10:56:53 AM",
        "Count":  1,
        "EventID":  7043,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/23/2018 10:56:53 AM",
        "Source":  "Service Control Manager",
        "EntryType":  1,
        "Message":  "The Malwarebytes Service service did not shut down properly after receiving a preshutdown control."
    },
    {
        "FirstTimeWritten":  "10/7/2018 9:53:54 AM",
        "Count":  1,
        "EventID":  1005,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "10/7/2018 9:53:54 AM",
        "Source":  "BugCheck",
        "EntryType":  1,
        "Message":  "The description for Event ID \u00271073742829\u0027 in Source \u0027BugCheck\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:"
    },
    {
        "FirstTimeWritten":  "8/19/2018 8:55:34 PM",
        "Count":  1,
        "EventID":  6041,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "8/19/2018 8:55:34 PM",
        "Source":  "LsaSrv",
        "EntryType":  1,
        "Message":  "A CredSSP authentication to TERMSRV/104.214.74.18 failed to negotiate a common protocol version.  The remote host offered version 4 which is not permitted by Encryption Oracle Remediation.\r\n\r\nSee https://go.microsoft.com/fwlink/?linkid=866660 for more information."
    }
];
	var appData =[
    {
        "FirstTimeWritten":  "10/9/2018 1:34:06 AM",
        "Count":  4223,
        "EventID":  100,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/26/2018 5:44:10 PM",
        "Source":  "Bonjour Service",
        "EntryType":  1,
        "Message":  "GetLargeResourceRecord: opt 5960 optlen 16 wrong"
    },
    {
        "FirstTimeWritten":  "10/9/2018 1:53:50 AM",
        "Count":  158,
        "EventID":  64,
        "color":  "#275F6C",
        "LastTimeWritten":  "11/26/2018 6:57:42 PM",
        "Source":  "AutoEnrollment",
        "EntryType":  2,
        "Message":  "The description for Event ID \u0027-2147483584\u0027 in Source \u0027AutoEnrollment\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027local system\u0027, \u002758 f3 34 93 a4 e5 0d 28 0e 32 12 3e b4 fe 4a e1 eb 2f 63 64\u0027"
    },
    {
        "FirstTimeWritten":  "10/10/2018 12:59:07 AM",
        "Count":  122,
        "EventID":  10010,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/26/2018 5:42:34 PM",
        "Source":  "Microsoft-Windows-RestartManager",
        "EntryType":  2,
        "Message":  "Application \u0027C:\\Program Files\\Microsoft Office\\root\\Office16\\lync.exe\u0027 (pid 11512) cannot be restarted - 1."
    },
    {
        "FirstTimeWritten":  "10/9/2018 7:06:29 PM",
        "Count":  79,
        "EventID":  1000,
        "color":  "#5A0101",
        "LastTimeWritten":  "11/27/2018 12:16:33 AM",
        "Source":  "Application Error",
        "EntryType":  1,
        "Message":  "Faulting application name: TeamViewer.exe, version: 13.2.26558.0, time stamp: 0x5b96853f\r\nFaulting module name: TeamViewer.exe, version: 13.2.26558.0, time stamp: 0x5b96853f\r\nException code: 0xc0000005\r\nFault offset: 0x00290a67\r\nFaulting process id: 0x71fc\r\nFaulting application start time: 0x01d485f5a652eb88\r\nFaulting application path: C:\\Program Files (x86)\\TeamViewer\\TeamViewer.exe\r\nFaulting module path: C:\\Program Files (x86)\\TeamViewer\\TeamViewer.exe\r\nReport Id: eb9fe259-2320-4a5d-b9f7-23dab1ea6d13\r\nFaulting package full name: \r\nFaulting package-relative application ID: "
    },
    {
        "FirstTimeWritten":  "10/10/2018 11:58:43 AM",
        "Count":  74,
        "EventID":  33,
        "color":  "#AE743B",
        "LastTimeWritten":  "10/29/2018 11:27:30 AM",
        "Source":  "SideBySide",
        "EntryType":  1,
        "Message":  "Activation context generation failed for \"C:\\Users\\Jose\\AppData\\Local\\Temp\\Deployment\\7QEXAJQ6.2AN\\GBZ775HZ.10Q\\E38DL24Z.38B\\PD0HGQTH.BY6.manifest\".\r\nDependent Assembly System.DirectoryServices.Protocols,publicKeyToken=\"B03F5F7F11D50A3A\",version=\"4.0.0.0\" could not be found.\r\nPlease use sxstrace.exe for detailed diagnosis."
    },
    {
        "FirstTimeWritten":  "10/12/2018 11:19:35 PM",
        "Count":  34,
        "EventID":  1002,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/26/2018 11:50:38 PM",
        "Source":  "Application Hang",
        "EntryType":  1,
        "Message":  "The program Microsoft.Photos.exe version 2018.18091.17210.0 stopped interacting with Windows and was closed. To see if more information about the problem is available, check the problem history in the Security and Maintenance control panel.\r\n\r\nProcess ID: 2114\r\n\r\nStart Time: 01d485cdfa9a5da0\r\n\r\nTermination Time: 4294967295\r\n\r\nApplication Path: C:\\Program Files\\WindowsApps\\Microsoft.Windows.Photos_2018.18091.17210.0_x64__8wekyb3d8bbwe\\Microsoft.Photos.exe\r\n\r\nReport Id: 39d9e5f0-58ba-4770-b324-fe2685616122\r\n\r\nFaulting package full name: Microsoft.Windows.Photos_2018.18091.17210.0_x64__8wekyb3d8bbwe\r\n\r\nFaulting package-relative application ID: App\r\n"
    },
    {
        "FirstTimeWritten":  "10/29/2018 12:37:16 AM",
        "Count":  28,
        "EventID":  1008,
        "color":  "#8ACE8A",
        "LastTimeWritten":  "11/15/2018 12:28:00 AM",
        "Source":  "Perflib",
        "EntryType":  1,
        "Message":  "The description for Event ID \u0027-1073740816\u0027 in Source \u0027Perflib\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027WmiApRpl\u0027, \u0027C:\\WINDOWS\\system32\\wbem\\wmiaprpl.dll\u0027, \u00278\u0027"
    },
    {
        "FirstTimeWritten":  "10/14/2018 7:04:48 PM",
        "Count":  27,
        "EventID":  2264,
        "color":  "#275F6C",
        "LastTimeWritten":  "11/15/2018 5:46:24 PM",
        "Source":  "IIS Express",
        "EntryType":  2,
        "Message":  "The directory specified for caching compressed content C:\\inetpub\\temp\\IIS Temporary Compressed Files\\Clr4IntegratedAppPool is invalid.  Static compression is being disabled."
    },
    {
        "FirstTimeWritten":  "10/13/2018 12:01:16 AM",
        "Count":  23,
        "EventID":  1039,
        "color":  "#D86D6D",
        "LastTimeWritten":  "10/13/2018 12:01:16 AM",
        "Source":  "MsiInstaller",
        "EntryType":  2,
        "Message":  "Product: Office 16 Click-to-Run Extensibility Component. The application tried to modify a protected Windows registry key \\Software\\Classes\\CLSID\\{3050F667-98B5-11CF-BB82-00AA00BDCE0B}\\InprocServer32."
    },
    {
        "FirstTimeWritten":  "10/10/2018 1:07:04 AM",
        "Count":  10,
        "EventID":  10006,
        "color":  "#57AD57",
        "LastTimeWritten":  "11/26/2018 5:42:10 PM",
        "Source":  "Microsoft-Windows-RestartManager",
        "EntryType":  1,
        "Message":  "Application or service \u0027Skype for Business\u0027 could not be shut down."
    },
    {
        "FirstTimeWritten":  "10/30/2018 7:50:06 AM",
        "Count":  7,
        "EventID":  25,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "11/22/2018 4:19:03 PM",
        "Source":  "Outlook",
        "EntryType":  2,
        "Message":  "Outlook is setting up a local copy of your mailbox.  It may be several minutes until all of your data is available."
    },
    {
        "FirstTimeWritten":  "10/30/2018 7:49:56 AM",
        "Count":  7,
        "EventID":  55,
        "color":  "#854E18",
        "LastTimeWritten":  "11/22/2018 4:18:50 PM",
        "Source":  "Outlook",
        "EntryType":  2,
        "Message":  "Calendar Folder New Download"
    },
    {
        "FirstTimeWritten":  "10/29/2018 12:37:16 AM",
        "Count":  7,
        "EventID":  2004,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/15/2018 12:28:00 AM",
        "Source":  "PerfNet",
        "EntryType":  1,
        "Message":  "The description for Event ID \u0027-1073739820\u0027 in Source \u0027PerfNet\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:"
    },
    {
        "FirstTimeWritten":  "11/8/2018 11:02:29 AM",
        "Count":  6,
        "EventID":  1017,
        "color":  "#022E38",
        "LastTimeWritten":  "11/8/2018 11:02:36 AM",
        "Source":  "Software Protection Platform Service",
        "EntryType":  1,
        "Message":  "Installation of the Proof of Purchase failed. 0xC004F069\r\nPartial Pkey=YPXCF\r\nACID=?\r\nDetailed Error[?]\r\n"
    },
    {
        "FirstTimeWritten":  "10/10/2018 9:15:54 AM",
        "Count":  6,
        "EventID":  63,
        "color":  "#854E18",
        "LastTimeWritten":  "10/10/2018 9:15:54 AM",
        "Source":  "Microsoft-Windows-WMI",
        "EntryType":  2,
        "Message":  "A provider, DMWmiBridgeProv1, has been registered in the Windows Management Instrumentation namespace root\\cimv2\\mdm\\dmmap to use the LocalSystem account. This account is privileged and the provider may cause a security violation if it does not correctly impersonate user requests."
    },
    {
        "FirstTimeWritten":  "10/13/2018 12:20:01 AM",
        "Count":  4,
        "EventID":  1,
        "color":  "#275F6C",
        "LastTimeWritten":  "11/18/2018 2:23:23 AM",
        "Source":  "NVIDIA OpenGL Driver",
        "EntryType":  1,
        "Message":  "The description for Event ID \u0027-1073741823\u0027 in Source \u0027NVIDIA OpenGL Driver\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027The GPU has been disconnected and this application may become unresponsive.\n\nError code: 10\n (pid=4140 tid=8016 streamdeck.exe 64bit)\n\nVisit http://www.nvidia.com/page/support.html for more information.\u0027"
    },
    {
        "FirstTimeWritten":  "10/16/2018 9:51:28 PM",
        "Count":  3,
        "EventID":  305,
        "color":  "#275F6C",
        "LastTimeWritten":  "10/16/2018 9:51:29 PM",
        "Source":  "DbxSvc",
        "EntryType":  1,
        "Message":  "Failed to open file: C:\\WINDOWS\\Minidump\\d009d46c-ac7b-4b04-941b-28afbde2c50e.dmp, error: (2) The system cannot find the file specified. "
    },
    {
        "FirstTimeWritten":  "10/16/2018 9:51:28 PM",
        "Count":  3,
        "EventID":  310,
        "color":  "#275F6C",
        "LastTimeWritten":  "10/16/2018 9:51:29 PM",
        "Source":  "DbxSvc",
        "EntryType":  1,
        "Message":  "Failed to get ANSI path for file: C:\\WINDOWS\\Minidump\\d009d46c-ac7b-4b04-941b-28afbde2c50e.dmp"
    },
    {
        "FirstTimeWritten":  "10/16/2018 9:51:28 PM",
        "Count":  3,
        "EventID":  333,
        "color":  "#114652",
        "LastTimeWritten":  "10/16/2018 9:51:29 PM",
        "Source":  "DbxSvc",
        "EntryType":  2,
        "Message":  "Crashdump C:\\WINDOWS\\Minidump\\d009d46c-ac7b-4b04-941b-28afbde2c50e.dmp is gone."
    },
    {
        "FirstTimeWritten":  "10/9/2018 12:45:47 PM",
        "Count":  3,
        "EventID":  8193,
        "color":  "#275F6C",
        "LastTimeWritten":  "11/13/2018 7:54:27 PM",
        "Source":  "VSS",
        "EntryType":  1,
        "Message":  "Volume Shadow Copy Service error: Unexpected error calling routine QueryFullProcessImageNameW.  hr = 0x80070006, The handle is invalid.\r\n.\r\n\n\nOperation:\n   Executing Asynchronous Operation\n\nContext:\n   Current State: DoSnapshotSet"
    },
    {
        "FirstTimeWritten":  "11/13/2018 7:55:36 PM",
        "Count":  2,
        "EventID":  1512,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/13/2018 7:55:36 PM",
        "Source":  "Microsoft-Windows-User Profiles Service",
        "EntryType":  1,
        "Message":  "Windows cannot unload your registry file. The memory used by the registry has not been freed. This problem is often caused by services running as a user account. Try configuring services to run in either the LocalService or NetworkService account. \r\n\r\n DETAIL - Access is denied.\r\n"
    },
    {
        "FirstTimeWritten":  "10/12/2018 11:55:44 PM",
        "Count":  1,
        "EventID":  11921,
        "color":  "#8ACE8A",
        "LastTimeWritten":  "10/12/2018 11:55:44 PM",
        "Source":  "MsiInstaller",
        "EntryType":  1,
        "Message":  "Producto: Killer Performance Driver Suite -- Error 1921.No se puede detener el servicio \u0027Rivet Dynamic Bandwidth Management\u0027 (RNDBWM). Compruebe que dispone de suficientes privilegios para detener servicios del sistema."
    },
    {
        "FirstTimeWritten":  "10/13/2018 12:00:02 AM",
        "Count":  1,
        "EventID":  11704,
        "color":  "#AE3B3B",
        "LastTimeWritten":  "10/13/2018 12:00:02 AM",
        "Source":  "MsiInstaller",
        "EntryType":  1,
        "Message":  "Producto: Killer Performance Driver Suite UWD -- Error 1704.Actualmente hay una instalación de Killer Performance Driver Suite en suspenso. Debe deshacer los cambios realizados por dicha instalación para poder continuar. ¿Desea deshacer esos cambios?"
    },
    {
        "FirstTimeWritten":  "10/13/2018 12:01:30 AM",
        "Count":  1,
        "EventID":  1013,
        "color":  "#854E18",
        "LastTimeWritten":  "10/13/2018 12:01:30 AM",
        "Source":  "MsiInstaller",
        "EntryType":  1,
        "Message":  "Producto: Killer Performance Driver Suite -- Ya tienes una versión más reciente de esta aplicación instalada en tu ordenador. Si deseas instalar esta versión, primero deberás desinstalar la versión más reciente. Haz clic en Aceptar para salir del asistente."
    },
    {
        "FirstTimeWritten":  "10/13/2018 12:01:37 AM",
        "Count":  1,
        "EventID":  10005,
        "color":  "#D86D6D",
        "LastTimeWritten":  "10/13/2018 12:01:37 AM",
        "Source":  "MsiInstaller",
        "EntryType":  1,
        "Message":  "Producto: Killer Performance Driver Suite -- Error 2732.Administrador de directorio no inicializado."
    },
    {
        "FirstTimeWritten":  "10/16/2018 9:51:29 PM",
        "Count":  1,
        "EventID":  300,
        "color":  "#D86D6D",
        "LastTimeWritten":  "10/16/2018 9:51:29 PM",
        "Source":  "DbxSvc",
        "EntryType":  1,
        "Message":  "ReadEventLog failed: (1500) The event log file is corrupted. "
    },
    {
        "FirstTimeWritten":  "10/17/2018 10:43:34 AM",
        "Count":  1,
        "EventID":  291,
        "color":  "#8ACE8A",
        "LastTimeWritten":  "10/17/2018 10:43:34 AM",
        "Source":  "DbxSvc",
        "EntryType":  1,
        "Message":  "Failed to open client process id: (5) Access is denied. "
    },
    {
        "FirstTimeWritten":  "11/8/2018 10:54:27 PM",
        "Count":  1,
        "EventID":  533,
        "color":  "#D86D6D",
        "LastTimeWritten":  "11/8/2018 10:54:27 PM",
        "Source":  "ESENT",
        "EntryType":  2,
        "Message":  "wuaueng.dll (5092,D,0) SUS20ClientDataStore: A request to write to the file \"C:\\WINDOWS\\SoftwareDistribution\\DataStore\\Logs\\edb.log\" at offset 1159168 (0x000000000011b000) for 4096 (0x00001000) bytes has not completed for 36 second(s). This problem is likely due to faulty hardware. Please contact your hardware vendor for further assistance diagnosing the problem."
    },
    {
        "FirstTimeWritten":  "11/3/2018 4:11:39 PM",
        "Count":  1,
        "EventID":  1023,
        "color":  "#136B13",
        "LastTimeWritten":  "11/3/2018 4:11:39 PM",
        "Source":  "Perflib",
        "EntryType":  1,
        "Message":  "The description for Event ID \u0027-1073740801\u0027 in Source \u0027Perflib\u0027 cannot be found.  The local computer may not have the necessary registry information or message DLL files to display the message, or you may not have permission to access them.  The following information is part of the event:\u0027rdyboost\u0027, \u00274\u0027"
    },
    {
        "FirstTimeWritten":  "11/3/2018 9:14:00 PM",
        "Count":  1,
        "EventID":  1508,
        "color":  "#D86D6D",
        "LastTimeWritten":  "11/3/2018 9:14:00 PM",
        "Source":  "Microsoft-Windows-User Profiles Service",
        "EntryType":  1,
        "Message":  "Windows was unable to load the registry. This problem is often caused by insufficient memory or insufficient security rights. \r\n\r\n DETAIL - The process cannot access the file because it is being used by another process.\r\n for C:\\Users\\Jose\\ntuser.dat"
    },
    {
        "FirstTimeWritten":  "11/3/2018 9:14:00 PM",
        "Count":  1,
        "EventID":  1502,
        "color":  "#6E98A1",
        "LastTimeWritten":  "11/3/2018 9:14:00 PM",
        "Source":  "Microsoft-Windows-User Profiles Service",
        "EntryType":  1,
        "Message":  "Windows cannot load the locally stored profile. Possible causes of this error include insufficient security rights or a corrupt local profile. \r\n\r\n DETAIL - The process cannot access the file because it is being used by another process.\r\n"
    },
    {
        "FirstTimeWritten":  "11/3/2018 9:14:00 PM",
        "Count":  1,
        "EventID":  1515,
        "color":  "#275F6C",
        "LastTimeWritten":  "11/3/2018 9:14:00 PM",
        "Source":  "Microsoft-Windows-User Profiles Service",
        "EntryType":  1,
        "Message":  "Windows has backed up this user profile. Windows will automatically try to use the backup profile the next time this user logs on."
    },
    {
        "FirstTimeWritten":  "11/3/2018 9:14:00 PM",
        "Count":  1,
        "EventID":  1511,
        "color":  "#5A2D01",
        "LastTimeWritten":  "11/3/2018 9:14:00 PM",
        "Source":  "Microsoft-Windows-User Profiles Service",
        "EntryType":  1,
        "Message":  "Windows cannot find the local profile and is logging you on with a temporary profile. Changes you make to this profile will be lost when you log off."
    },
    {
        "FirstTimeWritten":  "11/3/2018 9:14:19 PM",
        "Count":  1,
        "EventID":  522,
        "color":  "#851818",
        "LastTimeWritten":  "11/3/2018 9:14:19 PM",
        "Source":  "ESENT",
        "EntryType":  1,
        "Message":  "ShellExperienceHost (12640,P,98) TILEREPOSITORYS-1-5-21-4227449981-805725212-4001559950-1001: An attempt to open the device with name \"\\\\.\\C:\" containing \"C:\\\" failed with system error 5 (0x00000005): \"Access is denied. \". The operation will fail with error -1032 (0xfffffbf8)."
    },
    {
        "FirstTimeWritten":  "10/12/2018 11:47:02 PM",
        "Count":  1,
        "EventID":  11500,
        "color":  "#AE743B",
        "LastTimeWritten":  "10/12/2018 11:47:02 PM",
        "Source":  "MsiInstaller",
        "EntryType":  1,
        "Message":  "Producto: Killer Performance Driver Suite UWD -- Error 1500.Ya hay otra instalación en curso. Termine esa instalación antes de continuar con ésta."
    },
    {
        "FirstTimeWritten":  "11/6/2018 3:19:51 PM",
        "Count":  1,
        "EventID":  1026,
        "color":  "#014801",
        "LastTimeWritten":  "11/6/2018 3:19:51 PM",
        "Source":  ".NET Runtime",
        "EntryType":  1,
        "Message":  "Application: 4KCaptureUtility.exe\nFramework Version: v4.0.30319\nDescription: The process was terminated due to an unhandled exception.\nException Info: System.AccessViolationException\n   at .EGAVManager_SetEngineSettings(System.Runtime.InteropServices.HandleRef, System.Runtime.InteropServices.HandleRef)\n   at Elgato.EGAV.EGAVManager.SetEngineSettings(Elgato.EGAV.EGAVEngineSettings)\n   at GameCapture.Models.EngineSettings.set_Settings(Elgato.EGAV.EGAVEngineSettings)\n   at GameCapture.ViewModels.PreferencesViewModel.\u003cApplySettings\u003eb__393_0()\n   at BaseClasses.ActionHelper.EventTimerCallback(System.Object)\n   at System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object, Boolean)\n   at System.Threading.ExecutionContext.Run(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object, Boolean)\n   at System.Threading.TimerQueueTimer.CallCallback()\n   at System.Threading.TimerQueueTimer.Fire()\n   at System.Threading.TimerQueue.FireNextTimers()\n\n"
    },
    {
        "FirstTimeWritten":  "11/13/2018 7:54:31 PM",
        "Count":  1,
        "EventID":  8303,
        "color":  "#854E18",
        "LastTimeWritten":  "11/13/2018 7:54:31 PM",
        "Source":  "Microsoft-Windows-System-Restore",
        "EntryType":  2,
        "Message":  "Scoping unsuccessful for shadowcopy \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy5 with error 0x80070057."
    },
    {
        "FirstTimeWritten":  "11/8/2018 10:54:27 PM",
        "Count":  1,
        "EventID":  508,
        "color":  "#022E38",
        "LastTimeWritten":  "11/8/2018 10:54:27 PM",
        "Source":  "ESENT",
        "EntryType":  2,
        "Message":  "wuaueng.dll (5092,D,0) SUS20ClientDataStore: A request to write to the file \"C:\\WINDOWS\\SoftwareDistribution\\DataStore\\Logs\\edb.log\" at offset 1159168 (0x000000000011b000) for 4096 (0x00001000) bytes succeeded, but took an abnormally long time (36 seconds) to be serviced by the OS. This problem is likely due to faulty hardware. Please contact your hardware vendor for further assistance diagnosing the problem."
    },
    {
        "FirstTimeWritten":  "10/30/2018 10:47:12 AM",
        "Count":  1,
        "EventID":  36,
        "color":  "#5A0101",
        "LastTimeWritten":  "10/30/2018 10:47:12 AM",
        "Source":  "Outlook",
        "EntryType":  2,
        "Message":  "Search cannot complete the indexing of your Outlook data. Indexing cannot continue for C:\\Users\\Jose\\AppData\\Local\\Microsoft\\Outlook\\joseo@concierge365.net.nst (error=0x80340800). If this error continues, contact Microsoft Support."
    },
    {
        "FirstTimeWritten":  "11/3/2018 10:05:41 PM",
        "Count":  1,
        "EventID":  0,
        "color":  "#275F6C",
        "LastTimeWritten":  "11/3/2018 10:05:41 PM",
        "Source":  "XSplit.Core.exe",
        "EntryType":  1,
        "Message":  "\r\nDate and Time:         03/11/2018 10:05:41 p. m. -06:00\r\nMachine Name:          DESKTOPJG\r\nOS:                    Microsoft Windows 10 Pro 64-bit\r\nIP Address:            172.21.166.65\r\nCurrent User:          DESKTOPJG\\Jose\r\nXSplit User:           jortega@faboit.com\r\n\r\nApplication Domain:    XSplit.Core.exe\r\nAssembly Codebase:     file:///C:/Program Files (x86)/SplitmediaLabs/XSplit Broadcaster/x64/XSplit.Core.exe\r\nAssembly Full Name:    XSplit.Core, Version=3.5.1808.2937, Culture=neutral, PublicKeyToken=null\r\nAssembly Version:      3.5.1808.2937\r\nAssembly Build Date:   13/12/2004 01:37:54 a. m.\r\n\r\nException Source:      mscorlib\r\nException Type:        System.InvalidCastException\r\nException Message:     Unable to cast COM object of type \u0027XSplitBroadcasterLib.XSplitBroadcasterClass\u0027 to interface type \u0027XSplitBroadcasterLib.IXSplitBroadcaster\u0027. This operation failed because the QueryInterface call on the COM component for the interface with IID \u0027{6778ACA2-78C1-4BAF-88A2-3C738919200E}\u0027 failed due to the following error: An outgoing call cannot be made since the application is dispatching an input-synchronous call. (Exception from HRESULT: 0x8001010D (RPC_E_CANTCALLOUT_ININPUTSYNCCALL)).\r\nException Target Site: GetCOMIPFromRCW\r\n\r\n---- Stack Trace ----\r\n   System.StubHelpers.StubHelpers.GetCOMIPFromRCW(Object objSrc, IntPtr pCPCMD, IntPtr\u0026 ppTarget, Boolean\u0026 pfNeedsRelease)\r\n       XSplit.Core.exe: N 00000\r\n   XSplitBroadcasterLib.XSplitBroadcasterClass.set_Property(String prop, String pVal)\r\n       XSplit.Core.exe: N 00000\r\n   XSplit.Core.Objects.XSplitBroadcasterClassExtension.set_Property(XSplitBroadcasterClass broadcaster, String prop, String pVal, Boolean throwException, Boolean writeToDebugView)\r\n       XSplit.Core.exe: N 00597\r\n   XSplit.Core.Objects.BroadcasterWrapper.MO(String H, String O, Boolean Q, Boolean I, RegistryValueKind U, Boolean G, Boolean F)\r\n       XSplit.Core.exe: N 00684\r\n   XSplit.Core.XSplitBroadcaster.FYO(Boolean H, Size O)\r\n       XSplit.Core.exe: N 00590\r\n   XSplit.Core.XSplitBroadcaster.FYO()\r\n       XSplit.Core.exe: N 00051\r\n   XSplit.Core.XSplitBroadcaster.WndProc(Message\u0026 m)\r\n       XSplit.Core.exe: N 01497\r\n   System.Windows.Forms.NativeWindow.Callback(IntPtr hWnd, Int32 msg, IntPtr wparam, IntPtr lparam)\r\n       XSplit.Core.exe: N 00195\r\n\r\n\r\n"
    }
];;
		AmCharts.ready(function () {
		var chart = AmCharts.makeChart("chartdiv",{
			"type": "serial",
			"dataProvider": SystemData,
			"categoryField": "EventID",
			"startDuration": 1,
			//axes
			"valueAxes": [ {
				"dashLength": 5,
				"title": "Frecuency of the event",
				"axisAlpha": 0,
			}],
			"gridAboveGraphs": false,
			
			"graphs": [ {
				"balloonText": "EventID [[category]]</br>Repeated: <b>[[value]]</b> times</br>Source: [[Source]]</br>[[Message]]</br>First on:<b>[[FirstTimeWritten]]</b></br>Last on:<b>[[LastTimeWritten]]</b> </br> <b class=Yellow>[[EntryType]]</b>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "Count",
				"colorField": "color"
			}],
			"chartCursor": {
				"categoryBalloonEnabled": false,
				"cursorAlpha": 0,
				"zoomable": false
			},
			
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0,
				"fillAlpha": 1,
				"labelRotation" : 60,
				"fillColor": "#EEEEEE",
				"gridPosition": "start"
			},
			"creditsPosition" : "top-right",
			"export": {
				"enabled": true
			}
	});

		var chart2 = AmCharts.makeChart("chart2div",{
			"type": "serial",
			"dataProvider":appData,
			"categoryField": "EventID",
			"startDuration": 1,
			//axes
			"valueAxes": [ {
				"dashLength": 5,
				"title": "Frecuency of the event",
				"axisAlpha": 0,
			}],
			"gridAboveGraphs": false,
			
			"graphs": [ {
				"balloonText": "EventID [[category]]</br>Repeated: <b>[[value]]</b> times</br>Source: [[Source]]</br>[[Message]]</br>First on:<b>[[FirstTimeWritten]]</b></br>Last on:<b>[[LastTimeWritten]]</b> </br> <b class=Yellow>[[EntryType]]</b>",
				"fillAlphas": 0.8,
				"lineAlpha": 0.2,
				"type": "column",
				"valueField": "Count",
				"colorField": "color"
			}],
			"chartCursor": {
				"categoryBalloonEnabled": false,
				"cursorAlpha": 0,
				"zoomable": false
			},
			
			"categoryAxis": {
				"gridPosition": "start",
				"gridAlpha": 0,
				"fillAlpha": 1,
				"labelRotation" : 60,
				"fillColor": "#EEEEEE",
				"gridPosition": "start"
			},
			"creditsPosition" : "top-right",
			"export": {
				"enabled": true
			}
	});
	
			//Original
		/*
		// SERIAL CHART
		chart = new AmCharts.AmSerialChart();
		chart.dataProvider = SystemData;
		chart.categoryField = "EventID";
		chart.startDuration = 1;


		// AXES
		// category
		var categoryAxis = chart.categoryAxis;
		categoryAxis.labelRotation = 60; // this line makes category values to be rotated
		categoryAxis.gridAlpha = 0;
		categoryAxis.fillAlpha = 1;
		categoryAxis.fillColor = "#EEEEEE";
		categoryAxis.gridPosition = "start";

		// value
		var valueAxis = new AmCharts.ValueAxis();
		valueAxis.dashLength = 5;
		valueAxis.title = "Frecuency of the event";
		valueAxis.axisAlpha = 0;
		chart.addValueAxis(valueAxis);

		// GRAPH
		var graph = new AmCharts.AmGraph();
		graph.valueField = "Count";
		graph.colorField = "color";
		graph.balloonText = "<b>[[category]]: [[value]]</b>";
		graph.type = "column";
		graph.lineAlpha = 0;
		graph.fillAlphas = 1;
		
		chart.addGraph(graph);

		// CURSOR
		var chartCursor = new AmCharts.ChartCursor();
		chartCursor.cursorAlpha = 0;
		chartCursor.zoomable = false;
		chartCursor.categoryBalloonEnabled = false;
		chart.addChartCursor(chartCursor);

		chart.creditsPosition = "top-right";

		// WRITE
		chart.write("chartdiv");
		*/
});
