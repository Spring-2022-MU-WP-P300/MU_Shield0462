const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const { resolve } = require('path');
<<<<<<< HEAD
const connectDB = require('./server/database/connection');
=======

>>>>>>> b9d150d0aff5d5c81aea586400a9c513dffdc01a
const app = express();

dotenv.config({path :'config.env'})
const PORT = process.env.PORT || 8080
//log request
app.use(morgan('tiny'));

<<<<<<< HEAD
//mongoDB connection
connectDB();
=======
>>>>>>> b9d150d0aff5d5c81aea586400a9c513dffdc01a
//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//app.set("views",path.resolve(__dirname,"views/ejs"))

//load asstes
app.use('/css',express.static(resolve(__dirname,"assets/css")))
app.use('/img',express.static(resolve(__dirname,"assets/img")))
app.use('/js',express.static(resolve(__dirname,"assets/js")))

<<<<<<< HEAD
//Load Routers
app.use('/',require('./server/routes/router'))
=======
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/add-book',(req,res)=>{
    res.render('add_book');
})

app.get('/update-book',(req,res)=>{
    res.render('update_book');
})
>>>>>>> b9d150d0aff5d5c81aea586400a9c513dffdc01a

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});