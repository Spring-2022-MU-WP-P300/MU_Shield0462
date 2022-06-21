var Userdb = require('../model/model');

//create and save new book
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const book = new Userdb({
        bookName : req.body.bookName,
        writerName : req.body.writerName,
        prize : req.body.prize,
        status : req.body.status
    })
    // save the user to database
    book
    .save(book)
    .then(data =>{
        //res.send(data)
        res.redirect('/add-book');
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message||"some error occurred while creating a create operation"
        });
    });

}
//retrieve and return all books
exports.find = (req,res)=>{
    if(req.query.id){
        const id=req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found book with id"+id})
            }else{
                res.send(data)
            }
        })
        
        .catch(err=>{
            res.status(500).send({message:"Error retrieving book with id"+id})
        })
    }else{
        
    Userdb.find()
    .then(book=>{
        res.send(book)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error occurred while retriving book information"})
    })
    }
}
// Update a new book 
exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"});
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(400).send({message:`cannot update book with ${id}.`});
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error book information"})
    })
}
//delete a book
exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delete with id ${id}.`})
        }else{
            res.send({
                message:"book was deleted successfully"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message:"could not delete book with id ="+id
        });
    });
       
}