# Chat App
using socket.io 

---
## Requirements

*   nodejs installed

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Install

    $ git clone https://github.com/Nishan666/chat-app.git
    $ cd chat-app
    $ npm i


## start the Server
***Port : 5000***

    $ cd server

    $ node server.js 
    or
    $ nodemon server.js

## start the Client
***Port : 3000***

    $ cd client

    $ node client.js 
    or
    $ nodemon client.js


### You can open multiple tabs to use the chats app.

## ScreenShots

![Server](/screenshots/Screenshot%20from%202023-07-25%2013-30-04.png) 
![Client](/screenshots/Screenshot%20from%202023-07-25%2014-13-31.png)
![Chat App](/screenshots/Screenshot%20from%202023-07-25%2014-15-14.png)






<!-- ***Server must be always running***

## To use App

    $ cd client

    $ google-chrome index.html
    or
    $ firefox index.html

### for nerds (to use App)

    $ sudo apt-get install lynx

    $ lynx index.html -->