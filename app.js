const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");
const Student = require("./modules/registration");
const Admin = require("./modules/admin");

const app = express();

const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/registration", function(req, res) {
    res.render("registration");
});

app.get("/admin_login", function(req, res) {
    res.render("admin_login");
});

app.get("/login", function(req, res) {
    res.render("login", {name : "vikram"});
});

app.get("/admin", (req, res) => {
    res.render("admin");
})


//create a new user in studentDB
app.post("/registration", async(req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword){
            const users = new Student ({
                name: req.body.name,
                usn: req.body.usn,
                email: req.body.email,
                password: password,
                cpassword: cpassword
            })

            // const registered = await
            users.save();
            res.status(201).render("home");
        }
        else{
            res.send("Password do not match !!");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


//Login Verification 

app.post("/login", async(req, res) => {
    try {
        const usn = req.body.usn;
        const password = req.body.pass;

        const studentregno = await Student.findOne({usn:usn});
        console.log(studentregno);

        if(studentregno.password === password) {
            res.status(201).render("login", {name : studentregno.name});
        } else {
            res.send("Password do not match .. Try Again !!!");
        }

    } catch (error) {
        res.status(400).send("Invalid credentials");
    }
});

app.post("/admin", async(req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        const admindetails = await Admin.findOne({email:email});

        if(admindetails.password === pass) {
            res.status(201).render("admin");
        } else {
            res.send("Password wrong !!");
        }
    } catch (error) {
        res.status(400).send("Invalid credentials");
    }
});

app.listen(port, function(){
    console.log("Server is started !!");
})