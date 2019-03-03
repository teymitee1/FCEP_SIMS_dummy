//APP SETUP
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

//ROUTES
app.get("/", (req, res)=>{
    res.render("home")
});

app.get("/staffPage", (req, res)=>{
    res.render("userPage")
});

//SERVER
app.listen(8080, ()=>{
    console.log("server running");
});