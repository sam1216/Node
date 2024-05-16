//const  http =  require("http");
//const  fs = require("fs");
//const url = require("url");
const express = require("express");
//const { log } = require("console");

const app= express();
app.get("/",  (req, res) => {
return res.send("Hello Form Home Page");
});

app.get("/about",  (req, res) => {
    return res.send(`Hello ${req.query.name}` );
    //return res.send("Hello Form About Page"   + "Hey"  +  req.query.name +  "Your are" + req.query.age );
    });

app.listen(8001, () => console.log("Server Started") );

//const myServer =  http.createServer(app) ;
//myServer.listen(8001, () => console.log("Server Started"));

