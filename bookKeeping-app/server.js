const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const { resolve } = require('path');

const app = express();

dotenv.config({path :'config.env'})
const PORT = process.env.PORT || 8080
//log request
app.use(morgan('tiny'));

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//app.set("views",path.resolve(__dirname,"views/ejs"))

//load asstes
app.use('/css',express.static(resolve(__dirname,"assets/css")))
app.use('/img',express.static(resolve(__dirname,"assets/img")))
app.use('/js',express.static(resolve(__dirname,"assets/js")))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/add-book',(req,res)=>{
    res.render('add_book');
})

app.get('/update-book',(req,res)=>{
    res.render('update_book');
})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});