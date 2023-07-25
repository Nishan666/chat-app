const socket = io("ws://localhost:5000");       //server port connection

socket.on("check", (arg) => {      //confirm connection
    console.log(arg);
});

let form = document.getElementById('form');
let myname = document.getElementById('name');
let message = document.getElementById('message');
let messageArea = document.getElementById("messageArea");

//commented out code can be used for persistence of the chats using localstorage

// var chats = JSON.parse(localStorage.getItem("chats"));      //local storage

// console.log(chats);

// if (chats) {

//     for (let i = 0; i < chats.length; i++) {
//         if (chats[i]) {
//             let names = document.createElement("p");
//             names.style.backgroundColor = "grey";
//             names.style.width = "100%";
//             names.style.textAlign = "center";
//             names.style.color = "white";
//             names.textContent = chats[i].name + ":";
//             messageArea.appendChild(names);

//             let chatContent = document.createElement("p");
//             chatContent.textContent = chats[i].message;
//             messageArea.appendChild(chatContent);
//         }
//     }
// }



form.addEventListener("submit", (e) => {        //after send button clicked
    e.preventDefault();

    if (message.value) {
        socket.emit('send name', myname.value);
        socket.emit('send message', message.value);
        // if (chats) {            //localstorage
        //     localStorage.setItem("chats", JSON.stringify([...chats, { name: myname.value, message: message.value }]));    //localstorage
        // } else {
        //     localStorage.setItem("chats", JSON.stringify([{ name: myname.value, message: message.value }]));    //localstorage
        // }
        message.value = "";
    }
});

socket.on("send name", (username) => {      //handle name
    let name = document.createElement("p");
    name.style.backgroundColor = "grey";
    name.style.width = "100%";
    name.style.textAlign = "center";
    name.style.color = "white";
    name.textContent = username + ":";
    messageArea.appendChild(name);
});

socket.on("send message", (chat) => {       //handle message
    let chatContent = document.createElement("p");
    chatContent.textContent = chat;
    messageArea.appendChild(chatContent);
});
