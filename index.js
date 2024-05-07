const math = require("./math.js");  // this require function is from node.js


// agar hum require function k andar sirf ye likhe require("fs") , to wo fs module ko node ki directory m search karega , fs is the built in module in node.js
// agar hum require function k andar sirf ye likhe require("./fs") , to wo fs module ko current working directory m search karega



console.log("Hello Deepu");

console.log(math.add(2,5));

const http = require("http");

const fs = require("fs");

const url = require("url");  // pehle ye url ko node modules or dependencies m search karega agar usme nahi to bhi ye node js k built in modules m search karega

const express = require("express");

const app = express();

app.get("/",(req,res) => {

    return res.send("Hello from Home page");
});

app.get("/about",(req,res) => {

    return res.send("Hello from about page" + " Hey " + req.query.name + "you are "+ req.query.age);
});

app.listen(8000, ()=>{

    console.log("Server started on PORT");

});