const express = require('express');


const app = express();

app.get('/',(req,res)=>{

    res.send("Hello from server");
});

app.get('/hello',(req,res)=>{

    res.send("I am the devloper");
});


app.listen(3000);
