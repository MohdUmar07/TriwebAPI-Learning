const express = require('express');
const userRoute = require('./routes/user');


const app = express();

app.get('/',(req,res)=>{

    res.send("Hello from server");
});

app.use('/user', userRoute);


app.listen(process.env.PORT);
