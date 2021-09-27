# PasswordGenerator

Command line password generator using Node.js. It also copies the password to clipboard and gives the user an option to save the password in a text file.

For installing all dependencies run `npm install`

To display help for commands run `pswdgen --help`

Run file using `pswdgen (options)`

By default the generated password has 8 characters consisting of alphabets, numbers, and symbols. 
To specify the length run `pswdgen --length=20`. 
To save the password to the passwords.txt file run `pswdgen --save`.
To generate a password without any numbers run `pswdgen --no-nums` or `pswdgen -nn`.
To generate a password without any symbols run `pswdgen --no-symbols` or `pswdgen -ns`.

Sample output using different options and commands - 

![image](https://user-images.githubusercontent.com/33132715/134877452-ffd8bc2c-720e-4e9f-ae4d-adfd57ab35d7.png)



