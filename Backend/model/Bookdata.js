const mongoose = require("mongoose");

// connect to cloud Database
mongoose.connect("mongodb+srv://user1:user1@chatappv001.ntxyj.mongodb.net/dbnamechatappv001?retryWrites=true&w=majority");

// connect to manually created Database
// mongoose.connect("mongodb://localhost:27017/library");

// create Schema
const Schema = mongoose.Schema;

// define Schema structure for a book
const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String,
    about : String
});

// create model
var Bookdata = mongoose.model("bookdata",BookSchema);

// export model
module.exports = Bookdata;