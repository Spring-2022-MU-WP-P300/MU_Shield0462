const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const { resolve } = require('path');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({path :'config.env'})
const PORT = process.env.PORT || 8080
//log request
app.use(morgan('tiny'));

//mongoDB connection
connectDB();
//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//app.set("views",path.resolve(__dirname,"views/ejs"))

//load asstes
app.use('/css',express.static(resolve(__dirname,"assets/css")))
app.use('/img',express.static(resolve(__dirname,"assets/img")))
app.use('/js',express.static(resolve(__dirname,"assets/js")))

//Load Routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});