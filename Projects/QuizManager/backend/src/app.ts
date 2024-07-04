import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user';

const app = express();

const connectionString = "<MongoDB Connection String>";

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Page is Running");
});

app.use('/user/', userRoutes)

mongoose.connect(connectionString)
.then((res) => {
    // console.log(res);
    // app.listen(3000, () => {
    //     console.log("Server Conected")
    // });
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log("Server Conected")
});