const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://Sajon:5s6MH8RzeqQP4giB@cluster0.gdsf4.mongodb.net/book_app', {
        useUnifiedTopology: true
        })
        .then(() => console.log('Db Connected'))
        .catch(err => console.log(err));
};

module.exports = dbConnect;