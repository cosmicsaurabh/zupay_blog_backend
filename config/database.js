const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URI).then(
        (data) => {
            // console.log(`MongoDb connected with server : ${data.connection.host}`);
        }).catch((err)=>{
            console.log(err)
        })
}

module.exports = connectDb