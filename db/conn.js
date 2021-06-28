const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log('Server is up and running at port ${port}');
});