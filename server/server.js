const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer,{       //option is used to work with separate port client
        cors: {
          origin: '*',
        }
});

io.on("connection", (socket) => {    //communication
    socket.on('send name', (username) => {
        io.emit('send name', (username));
    });
    socket.on('send message', (chat) => {
        io.emit('send message', (chat));
    });

    io.emit('check','server is ON');   //confirm connection
});



httpServer.listen(port, () => {
    console.log(`Server is listening at the port: ${port}`);
});



// mongoose.connect('mongodb://127.0.0.1:27017/chat-app')
// .then(()=>console.log("Connected to mongodb database"))
// .catch((err)=>console.log(err));