const express = require ('express');
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


require("dotenv").config();
const userRouter = require("./api/user/user.router");


app.use(express.json());

app.use("/api/user", userRouter);




app.listen(process.env.APP_PORT, () => {
    console.log(process.env.APP_PORT);
});