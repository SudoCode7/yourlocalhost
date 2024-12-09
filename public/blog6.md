# How to be a better OSINTer

There is nothing more fascinating than the power of Open-Source Intelligence, which truly unlocks hidden secrets, brings to light threats, and provides vital information. 

![[OSINT.webp]]

**Beyond the Basics

Let's face it. We all have started our OSINT journey with some basic Google dorking, social media footprinting, and data breaches. While these are the base, there is much more to OSINT than these. To do things properly and efficiently, one needs to think beyond the book and be versatile enough for constantly changing the digital world.

Continuous improvement is the key to mastering OSINT. This isn't a guide to specific tools or courses, as countless resources are readily available online. Instead, I'll share insights to sharpen your perspective and guide your investigations

**1. Understand Your Target's Digital Footprint**

**Geopolitical subtlety :** Digital behavior varies through every culture and region. Whatever is popular in one region may be unknown in other regions.
**Platform choices.** Identify which platforms would allow your target to be very likely to visit. Be it a niche social site, a particular forum or simply a professional networking site.
* **Data Privacy Laws:** Be aware of data privacy regulations in various jurisdictions. This can impact the availability of information and the techniques you can use.

**2. Google Dorking Mastery

Google Dorking is a potent technique that allows you to extract specific information from Google Search. Here are some advanced tips:

* **Use Boolean Operators:** Use keywords along with operators such as "AND," "OR," and "NOT" to refine your search queries.
* **Target Site-Specific Searches:** Target specific websites or domains to narrow down your search results.
* **Explore Advanced Search Operators:** Use operators like "filetype," "intitle," and "inurl" to filter results based on file type, title, or URL.

**3. The Breached Data**
 Breached data is an absolute goldmine for OSINT investigations. You can obtain a lot of information, including:

* **Actual Email Addresses:** Many people use the same password on multiple accounts. The breached data can reveal their email address.
* **Phone Numbers:** Breached data can provide phone numbers associated with different accounts, which can be a good clue on the identity of your victim.
* **Home Addresses:** Some breached data may include the home addresses, which might be a big chunk of the puzzle.

**4. Create Your Own Breached Data Cache

Instead of depending on some online databases, design your private organized repository to store and analyze breached information. From there, you shall be able to:
 
Cross-reference data to reveal undetected patterns.
Identify trends in the data, which will help deepen your insights.
Personalize searching to target a particular person or organization.

5. **Leverage Technical Skills**

This means mastering basic command-line tools, such as `sed`, `awk`, and `cut`, that can be very powerful for data manipulation and extraction.
 Learn scripting : Automate repetitive tasks and streamline your workflow using scripting languages like Python or Bash.
 Explore data analysis tools : Use Splunk, Kibana, or Jupyter Notebook to analyze large datasets and extract meaningful information.
``` shell
Replace "OLD" with "NEW": sed -i 's/OLD/NEW/g' data. txt
Replace all commas with a hyphen: sect -i 's / \, / \ -/ g' data. txt
Replace all tabs with a comma: sed -i 's/ [ strike ctrl-v-tab] /\, /g' data. txt
Remove all data until the first comma: sect -i 's /" \ ( [", ] *, \) / / g' data. txt
Remove all data until the first colon: sed -i ' s /" [" : ] * : / / g' data. txt
Remove all single quotes: sed -i ' s/\' / /g' data. txt
Remove all double quotes: sed -i 's/\" / /g' data. txt
Remove "junk": sect -i 's/junk/ /g' data. txt
Remove all between "FIRST" & "THIRD": sed -i 's/\ (FIRST\) . *\(THIRD\)/\ 1 \2 /' data. txt
Remove all digits between commas: sed -i ' s / \, [ 0-9] * \, / / g' data. txt
Remove any line beginning with "TEST": sed -i '/"TEST/ d' data. txt
Remove any line not containing "@": awk '/@/' data. txt > newfile. txt
Remove emptylines:sed -i "' '/"$/d" data.txt
Removefirst10lines:sed -i '1,10d' data.txt
Remove first ten characters: sect -i 's /". \ { 10 \} / /' data. txt
Remove everything after the last "_": sed -i "s / _ [ "_] * $ / /" data. txt
Remove duplicate rows: awk '!seen[$0]++' data.txt > newfile.txt
Remove duplicate rows and sort:LC_ALL=C sort -u -b -i -f
data.txt > newfile.txt
Remove data between "{" and "}": sed -i 's/ { ["}] *} / /g' data. txt
Extract email addresses: grep -E -o "\b [a-zA-Z0-9. -] +@ [a-zA-Z0-9. -] +\. [a-zA-Z0-9. -
]+\b" < data.txt > newfile.txt
Split large file into multiple files: split -1 200000000 data. txt 1
Display total lines in a file: we -1 data. txt
Cut columns1,2,and6:LANG=C cut -d, -fl,2,6 data.txt > newfile.txt
Remove hyphens from phone numbers: sed -i 's/\ ( [ 0-9] \ { 3, \} \) -/\1 /g' data. txt
Cut columnsfromJSON:jq --raw-output "'\(.email)\(.password),"' l.json > new.txt
```

6. Visualize Your Research through Mind Mapping

Mind mapping is a very effective technique in organizing information and establishing links between items. It helps you visually understand the big picture that has been derived from your findings. You can use mind mapping software to:

Organize Information: Structure your research in a hierarchical format.
Identify Relationships: Discover connections between apparently unrelated pieces of information.
Prioritize Tasks: Focus on the most important leads and potential breakthroughs.

7. Using Stealer Logs for in-depth analysis

Stealer logs, obtained from compromised systems, are a treasure trove of information about an attacker's activities. Analyzing them will help you:

Recover Compromised Credentials: Uncover stolen usernames, passwords, and other sensitive information.
Track Attacker Behavior: Understand the tactics, techniques, and procedures of the attacker.
Detect Early Indicators of Compromise: Identify possible threats before they escalate.

**Ethical Considerations

OSINT is a very strong tool, but it is always to be used responsibly and ethically. Respect privacy laws and do not cause harm to individuals or organizations. Therefore, following these guidelines and continually honing your skills, you can become a formidable OSINT practitioner.

Alas i would like to end by the quote by *the man, the god father* of OSINT himself:
"We can no longer keep our heads in the sand and hope no one notices the leakage of sensitive data. We must think like the criminals and attack from their mindset. If you are an online investigator who can responsibly benefit from this type of data, I want you to know what to do with the content you find. I also want you to protect the data and make sure you cause no further harm." - Michael Bazzell

