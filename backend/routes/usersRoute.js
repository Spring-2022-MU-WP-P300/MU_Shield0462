const express = require('express');
const User = require('../models/User');
const usersRoute = express.Router();

//register route
usersRoute.post('/register',async (req,res)=>{
    try {
       const {name, email, password } = req.body;
       const user =await User.create({name, email, password});
       console.log(user);
       res.send(user);
    }catch (error){
        console.log(Error);
    }
});


//login route
usersRoute.post('/login', (req,res)=>{
    res.send('Login route');
});

//Update user route
usersRoute.put('/update', (req,res)=>{
    res.send('Update route');
});

//delete user route
usersRoute.delete('/:id', (req,res)=>{
    res.send('Delete route');
});

//Fetch user route
usersRoute.get('/', (req,res)=>{
    res.send('Fetch  route');
});


module.exports = usersRoute;