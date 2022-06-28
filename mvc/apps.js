const express = require("express");
const bodyParser = require("body-parser");

const playersRouter = require("./router/players");

app.use("/players", playersRouter);

app.listen(4000, ()=>{
    console.log("listening");
})