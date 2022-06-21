const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    bookName : String,
        
    writerName : String,
    prize : Number,
    status:String
})
const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;