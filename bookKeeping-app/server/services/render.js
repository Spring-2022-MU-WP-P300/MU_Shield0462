const axios = require('axios');
exports.homeRoutes = (req,res)=>{
        axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', {users : response.data});
        })
        .catch(err=>{
            res.send(err);
        })
       
}
exports.add_book = (req,res)=>{
    res.render('add_book');
}
exports.update_book = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(bookdata){
        res.render("update_book",{book : bookdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}