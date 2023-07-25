const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));    //to counter error: MIME type (“text/html”) is not a valid JavaScript MIME type

app.use('/',(req,res)=>{                           //html page
    res.sendFile('index.html', { root: __dirname });
})


app.listen(3000,()=>console.log("Hosted at port 3000"));