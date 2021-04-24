var mongoose = require("mongoose");

// connect to cloud Database
mongoose.connect("mongodb+srv://user1:user1@chatappv001.ntxyj.mongodb.net/dbnamechatappv001?retryWrites=true&w=majority");

// connect to manually created Database
// mongoose.connect("mongodb://localhost:27017/library");

// create Schema
var Schema = mongoose.Schema;

// define Schema structure for an user account
var AccountSchema = new Schema({
    name : String,
    email : String,
    username : String,
    password : String
});

// create model
var Accountdata = mongoose.model("accountdata",AccountSchema);

// export model
module.exports = Accountdata;