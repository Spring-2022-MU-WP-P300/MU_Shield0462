const express = require('express');
const mongoose = require('mongoose');
require('./config/dbConnect')();
const User = require('./models/User');
const usersRoute = require('./routes/usersRoute');
const app = express();

//passing bode data
app.use(express.json());




//Routes
app.use('/api/users',usersRoute);

//login route
app.post('/api/users/login', (req,res)=>{
    res.send('Login route');
});

//Update user route
app.put('/api/users/update', (req,res)=>{
    res.send('Update route');
});

//delete user route
app.delete('/api/users/:id', (req,res)=>{
    res.send('Delete route');
});

//Fetch user route
app.get('/api/users', (req,res)=>{
    res.send('Fetch  route');
});

//server
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is up and runing ${PORT }`);
});


//mongodb+srv://Sajon:<password>@cluster0.gdsf4.mongodb.net/test
//5s6MH8RzeqQP4giB
//Sajon