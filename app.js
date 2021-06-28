const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");

const app = express();

const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
})

app.get("/registration", function(req, res) {
    res.render("registration");
})

app.listen(port, function(){
    console.log("Server is started !!");
})