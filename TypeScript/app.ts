import express from 'express';

import userRoute  from './src/routes/user';


const app = express();


app.use('/user', userRoute);


app.listen(process.env.PORT);

