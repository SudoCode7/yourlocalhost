# How to be a better OSINTer
Yes yes, I will start my blog by spilling the beans that yes I have myself studied [] book by Michael Bazzel. But my history with OSINT dates long back to my days of college. As a hacker we all would have done some form of OSINT when we got started somewhere. Remember the website you used to get cracked softwares from or the place where u would get cybersecurity courses for for free from....

In todays world OSINT has become a vital part of cybersecurity's daily workflow. We use it to find exploits while doing red team engagements, search for IOCs when an alert fires in SOC or just to corellate the activitities carried out by people in orgs like looking up thier JD, role, email etc.

It is a truly continous process of improvement. And this is not a blog of where you can find people or which courses to study from, I am really not into the spca of writing tutorials for people to foolow to do OSINT, you can find plethora off those all over the internet. Indtead I would recommend some tit-bits which can actually help you to really improve your vision to look for at the right place.

1. OSINT is not the same for every geographical location in the world, if a major chunk of the world uses whatsapp a lot to communicate, it still does not apply to every geographical location, Whatsapp is from US still people don't use it there. Another example is Ebay, it is pretty common in US but not in India or most parts of the world. Study the tech utilized at a place to be more efficient in your OSINT searches.
2.  Learn Google dorking throughly, you would be amazed to know most of the things will get sorted if this is done throughly, utilize cheatsheets which are freely available on the internet to find curated results of your target.
3.  I want to state again that breach
data has been the absolute biggest aid in my online investigations. I rely on it way more than Facebook, Twitter,
and Instagram combined. This data can be a goldmine to get you closer to your suspect, you can get real email ids associated with the targe [one of the most underrate thing which people have is that they will use same passowrds for all their account and this helps us to find theitr originAL accounst]
4. learning to maintain a breached database, well if you are searching them on online database rather why not have a stuructured database to grow 
5. Stealer logs
6. Ransomware data another place to find your
8. using mind map software
9. Learnig SEd. awk and cut: (the most underrated tools of linux in the world)
   Some terminal startergies:
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

"We can
no longer keep our heads in the sand and hope no one notices the leakage of sensitive data. We must think like
the criminals and attack from their mindset. If you are an online investigator who can responsibly benefit from
this type of data, I want you to know what to do with the content you find. I also want you to protect the data
and make sure you cause no further harm." - Machel bzzel





