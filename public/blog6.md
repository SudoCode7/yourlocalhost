# Where does your first IP address query really go or what is a Domain Name System or DNS?

We all would have wondered at some time or the other, where basically our IP addresses address come from? 

Let's try to understand this in the simplest way possible.
![alt text](https://static.wixstatic.com/media/nsplsh_676c527179574a67556559~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_925,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_676c527179574a67556559~mv2_d_6016_4016_s_4_2.jpg)

So let's start,


You query your website of choice on google, google get's you it's url, you click on it and tada, you are on the webpage you intended for!


Let's see what happens in the background --> 
1. You query your website of choice on google and google gets you it's nearest , similar or the same search results.
2. Once you click on this link, of your choice, google goes and fetches the ip for your intended link from the Domain Name System or DNS. 
3.  After receiving this ip from the DNS, your browser will redirect this request to your destination's website located somewhere else in the world.

![alt text](https://static.wixstatic.com/media/e8c859_bc28a091ae064146901c6fdc4c8a24fd~mv2.png/v1/fill/w_925,h_333,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e8c859_bc28a091ae064146901c6fdc4c8a24fd~mv2.png)


Let's explore what happens in these DNSs -->
1. Every networking device has it's own DNS cache, weather it may be router, mobile, laptop etc.
2. Before querying the higher DNS server in the network, every device will check it's DNS cache first, to check if the ip address of your desired website is present, only then it will ask the higher authority DNS for help till the root DNS server.



The administration of the Domain Name System (DNS) is structured in a hierarchy using different managed areas or “zones”, with the root zone at the very top of that hierarchy. Root servers are DNS nameservers that operate in the root zone. These servers can directly answer queries for records stored or cached within the root zone, and they can also refer other requests to the appropriate Top Level Domain (TLD) server. The TLD servers are the DNS server group one step below root servers in the DNS hierarchy, and they are an integral part of resolving DNS queries.

As simply quoted by Cloudflare.










Image Source: Cloudflare 



Now let's try to understand of what would happen if anything happens to these servers in the form of cybersecurity and goes sideways- 

1. Let's say if the DNS servers are poisoned:

The attacker will divert you to a malicious  and same looking website, here you may end up loosing your banking password, social media etc. as it is not the original website you intended to go to but a filter copy of it, run by the attacker.



2. If the DNS goes down:
In this scenario, most ISPs (Internet Service Provider) may end up shifting to backup servers or you may end up, not having to get to a website but your search engine will keep on working as it is generally on a constant IP.



3. Loosing your privacy:
The worst case scenario and the most occurred worst case scenario, is you getting yourself tracked, where your IP addresses are going as well as your ISP tracking which websites you visit regularly and monetizing from that content or giving data to the government when required.



To prevent this from happening, shift to some trusted DNS providers in your mobile, laptop as well as your Router like:-





Cloudflare DNS



OpenDNS



Google DNS

And don't forget to use a VPN on a public wifi too. These steps will surely not completely anonymize you from the internet but will definitely help you take a baby step towards getting secured well in the online jungle.


That's it for this week, a nice short but an informative one.
Don't forget to subscribe to my mailing list down below, to learn about such new & interesting content by being the first on my platform.

Till then keep safe, keep learning :-)
