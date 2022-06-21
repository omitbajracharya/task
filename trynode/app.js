const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":false}));

const route = require('./route/routing');
app.use("/api",route);

app.listen(3000,()=>{
    console.log("listening...");
})