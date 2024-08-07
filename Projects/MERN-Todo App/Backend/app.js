const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./routers/todo');

const app = express()
app.use(express.json());
app.use(cors());

app.use('/', todoRouter);

const uri = "<MongoDB connection string>";
mongoose.set("strictQuery", false);

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

app.listen(3002, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server Connected!");
})


