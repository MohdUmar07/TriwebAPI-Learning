import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("Page is Running");
});



app.listen(3000);