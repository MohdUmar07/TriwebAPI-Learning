import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user';
import authRoutes from './routes/auth';

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Page is Running");
});

app.use('/user/', userRoutes)
app.use('/auth/', authRoutes)

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

app.listen(process.env.PORT, () => {
    console.log("Server Conected");   
});