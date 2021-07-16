const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");
const Student = require("./modules/registration");
const Admin = require("./modules/admin");
const Post = require("./modules/post");

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
    Post.find({}, function(err, foundjobs) {
        if(foundjobs.length === 0) {
            res.render("login");
        }
        else {
            res.render("jobs");
        }
    })
});

app.get("/admin", async(req, res) => {
    const total = await Student.find().countDocuments();
    res.render("admin", {count: total});
});

app.get("/students", async(req, res) => {
    Student.find({}, function(err, students) {
        if (!err) {
            res.render("students", {
                studentsList: students
            });
        } else {
            console.log(err);
        }
    })
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
                cpassword: cpassword,
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
        // console.log(studentregno);

        if(studentregno.password === password ) {
            const jobsNo = await Post.find().countDocuments();
            if(jobsNo === 0) {
                res.status(201).render("login", {name : studentregno.name});
            } else {
                Post.find({}, function(err, foundjobs){
                    if(!err) {
                        res.render("jobs", {
                            name: studentregno.name,
                            regno: studentregno.usn,
                            companyLists: foundjobs
                        })
                    }
                })
            }
        } else {
            res.send("Password do not match .. Try Again !!!");
        }

    } catch (error) {
        res.status(400).send("Invalid credentials");
    }
});


//posting jobs
app.post("/admin1", async(req, res) => {
    const jobs = new Post ({
        company: req.body.company,
        department: req.body.department,
        branch: req.body.branch,
        backlog: req.body.backlog,
        location: req.body.location,
        role: req.body.role,
        agreement: req.body.agreement,
        interview: req.body.interview,
        ctc: req.body.ctc,
        description: req.body.description
    })
    jobs.save();
    const total = await Student.find().countDocuments();
    res.status(201).render("admin", {count: total});
})

app.post("/admin", async(req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        const admindetails = await Admin.findOne({email:email});
        const total = await Student.find().countDocuments();

        if(admindetails.password === pass) {
            res.status(201).render("admin", {count: total});
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