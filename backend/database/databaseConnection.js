const mongoose = require("mongoose");


require("dotenv").config();


const connectDatabase = () =>{

    return mongoose.connect(process.env.MONGODB_URI)


}


module.exports = { connectDatabase }