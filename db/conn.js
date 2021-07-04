const mongoose = require("mongoose");

mongoose.connect(" mongodb+srv://admin-campusHiring:campusHIRING@123@campushiring.casra.mongodb.net/studentDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log('error ... Connection unsuccesful');
});

// mongodb+srv://admin-campusHiring:campusHIRING@123@campushiring.casra.mongodb.net/studentDB

// mongodb://localhost:27017/exampleDB