const express = require('express');
const calculatorRouter = require('./routers/calculator');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("I am response");
});

// app.get('/add', (req,res)=>{
//     let n1 = 3;
//     let n2 = 4;
//     let sum = n1+n2;
       
//     // res.send("Sum = " + sum);
//     res.send(`Sum = ${sum}`);
// });


app.use('/calculator',calculatorRouter)



app.listen(3000);

