const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-campusHiring:campusHIRING@123@campushiring.casra.mongodb.net/studentDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log('Server is up and running at port ${port}');
});