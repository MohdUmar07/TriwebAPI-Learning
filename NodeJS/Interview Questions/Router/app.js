const express = require('express');
const userRoutes = require('./routers/user')

const app = express();

// midelleware
app.use((req, res, next) => {
    console.log("I am here");
    next();
});


// user -> user routers
app.use("/user", userRoutes);



app.listen(3002);