We all are hackers in some form or another. We all have used 'jugaad' in all our lives to solve countless problems, which indeed means we all would have done reverse engineering at some point irrespective of knowing it. In this week's blog, I am going to introduce how I reverse-engineered a locked/ binded wireless router to make it my personal device.

  

![](https://static.wixstatic.com/media/nsplsh_ae6d511efbea455c96386896a401fe02~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_ae6d511efbea455c96386896a401fe02~mv2.jpg)

Disclaimer- This blog is intended for educational purposes, I do not intend to harm any organization for profit, and this is done for sheer fun and learning purposes only.

  

So with the disclaimer out of the way, let's start.......

What is a binded router anyone would ask after reading the above intro? A binded router is one that will only work when connected to a particular network, so let's say you are connected to an ISP, A, and tomorrow you move to a new location where you have a new ISP, B, you won't be able to use this router on that network, as it is locked. Think of it as buying a phone which is Verizon/ AT&T locked and cannot be used on another carrier.

  

This generally poses a huge problem, as the routers are pretty bad in their security, and won't offer any general useful features other than just a working wireless connection, even sometimes not even a bridged mode to connect your own personal router.

There is a huge monopoly played by these ISPs so that customers don't buy other routers and use the company's stock routers, even the red-flagged Huawei routers in some cases.

  

Frustrated with this, I decided to tinker around and learn how the authentication works on them, to my surprise these are heavily guarded and modified pieces of hardware, sometimes even to the length that you will find no information about the router on the internet. Now, this is tricky. The authentication done on PPPoE is most of the time customized according to the ISP's authentication type, it may vary according from ISP to ISP, and every ISP will have it pre-configured into its baked software, with auto-update remote capabilities via SSH. These measures put in place makes it difficult to crack the lock on these devices and flash a firmware that is universal.

  

1. So the first step in cracking the code is:

Through OSINT, scour the whole internet, in my case I was able to find my D-link router's firmware which was fortunately available for one of its publically sold versions. This stage isn't easy, you won't find anything if you don't look specifically for what you require, search all forums from Quora to reddit, related google searches, etc.

  

2. Login to the admin panel: The customized firmware makes it harder for even a normal user to login into his own router, again, in this case, OSINT is the only way. It turned out the default password was set to the router's MAC address, a pretty uncommon thing to see and a grave security risk for users as this can be extracted by hackers via the ARP protocol. If you are not able to find the password for your login admin panel on the internet, last resort, brute-forcing it, use tools like hydra to login. It would be time-consuming but eventually, you will be able to get inside.

  

  

3. Third and most crucial step: Flashing the firmware, as mentioned above in the first step, after obtaining the firmware file, the firmware file to be flashed will not be so easy, in my case the page to flash the firmware was hidden from all the menus and had to be brute-forced to get on that page. Indeed when there it was just an upload and wait & watch, biting my fingernails in anxiety so as not to see the router brick. Whereas some other routers which I am working on nowadays, require me to brute-force the ssh credentials or reverse the encrypted config files to extract the login credentials.

After all this process, where was I? I was able to unlock the router and this piece of hardware can now be used on any network, it gets regular security patches, has all wifi router features for my usage, and most importantly I was able to save it from going into a landfill and becoming an ewaste😀.

  

That is it for this week's blog, I hope you would have learned and enjoyed something new. If you end up trying it out, do hit me in the comments section down below, I would love to hear about your experience.

Till then, keep learning and keep exploring!