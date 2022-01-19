# Node Password Secure API example
For demonstrating RSA password decryption and hashing the password before saving into db

**This is the backend for REACT NATIVE APP**
 - app repo link : https://github.com/Izas-Ahamed/react-native-comm-example
 
**Here, I've used Asymmetric encryption!**

***RSA Keys (public and private keys) are generated with OpenSSL library***

Note: **We could generate keys on the fly with server on each account creation and login requests for password protection, 
      but for demonstrating purpose here I've used already generated keys with openSSL(1024 bit) which is static.**

- We decrypting the recieved password with private key which encrypted with public key by the app before sending to server.

- After decrypting the password successfully, we hashing the password with **bcrypt** before storing to database (here **MongoDB** is used)

**running the app :**
 - set your environmental vairables (username,password etc..) in package.json under scripts -> start :
 - open the terminal and go to this project root directory
 - type in the terminal
   > npm install
   
     and press enter
  - then type 
    > npm start
     
     and press enter
 
# 
**then app will started running! :)** 
