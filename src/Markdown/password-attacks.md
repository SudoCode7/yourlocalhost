# Types of Password Attacks

In today's world attacks vary from basic misconfiguration privilege escalations to advanced types of APT(Advanced Persistent Threat) level intrusions, the one thing which remains common in all of these attacks is brute-forcing password-cracking attempts. In this week's blog, we are going to explore:

-   The various types of password attacks that hackers use to break into your account.
    
-   How can you secure it before bad guys get into it?
    

![](https://static.wixstatic.com/media/nsplsh_4e34676e2d654c45497749~mv2_d_3888_5184_s_4_2.jpg/v1/fill/w_925,h_1234,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_4e34676e2d654c45497749~mv2_d_3888_5184_s_4_2.jpg)

  

A password attack just seems like shooting arrows as described in the above image in which one arrow will for sure hit the target accurately while in computer terms, meaning: leveraging your computing power to crunch heavy calculations until the correct password is guessed. So let's see which type of password attacks may be used to guess your password:-

  

1.  Rainbow attack- This attack consists of pre-computed hashes stored against the string values, which are used to match against the hashes used in the original password files stored on the target system. Since these passwords are not stored in plain text and are stored as a hashed value, it is one of the best types of attack an attacker can use to crack passwords. This is the most probable type of attack when it comes to time-limited scenarios, but a simple rainbow attack list may be more than a terabyte long just for an 8-character long string. To see this type of attack list you can visit [ophcrack](https://ophcrack.sourceforge.io/) to see rainbow attack lists and software.
    
2.  Dictionary attack- This type of attack revolves around the type of how novice a user is while setting up his/her own passwords. With some of the extensively used password dictionaries available on the internet like [rockyou.txt](https://www.kaggle.com/datasets/wjburns/common-password-list-rockyoutxt), it is very simple to find commonly used passwords in these dictionaries. Hence using an off-beat password will help you protect with better security.
    
3.  Collision attack- This type of attack is used to match the similar type of hash values used by the same set of strings. Although similar to the Rainbow attack they are slightly different from it, over there passwords have to be accurate in accord with the hash value, here it may differ as some hashing algorithms like MD4, MD5, SHA-1, etc. may contain different strings having the same hash values which may be used to crack the authentication.
    
4.  Blind Guess attack- This is the most computing-hungry type of attack. If you have enough computing resources power, with external GPUs attached to your main motherboard. this will eventually crack any type of password you may present, but time plays a very crucial role, if the password is more than 8 characters long, it may not take up less than a year with four RTX 3060s to crack the password you are trying to find out with all types of combinations on the keyboard. With the concept of quantum computing, this may change forever, stay tuned for that in my future blog.
    

You might be surely wondering then how can one protect theselves from any such type of attacks?? The answer is simple, use passwords that are:-

-   Complex (Infrequent positions of numbers and special characters)
    
-   Long
    
-   Don't contain English strings
    

This may not be possible for a normal user to remember but a password manager can help you in the long run for sure, you can click [here](https://www.yourlocalhost.co.in/post/how-to-manage-your-passwords) to learn more about them. Remember the safest passwords are those which cannot be guessed by computers easily.

  

Try out Lastpass's password generator if you want to look out for how it should be, by clicking [here.](https://www.lastpass.com/features/password-generator-a#generatorTool)

  

With this I take your leave, meet you in the next week's blog with some more interesting topic, till then: Keep learning, Keep exploring🙃!