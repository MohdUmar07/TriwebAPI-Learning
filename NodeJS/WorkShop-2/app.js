const express = require('express');

const userRouter = require('./routers/user');

const app = express();

app.use(express.json());

// localhost:3000/user/....
app.get('/',(req, res) =>{
     res.send("I am working");
    
 });

// localhost:3000/user/....
app.use('/user', userRouter);

app.listen(3000);