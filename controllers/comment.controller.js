const Comment = require('../models/comment.model');

exports.retrieveByCar = (req, res) => {
    Comment.find({carMatricule : req.params.carMatricule})
    .sort({ creation: "descending" })
    .exec(function (err, list) {
        if (err) {res.status(500).send(err);}
        else {res.json({status: 200 ,message: "List of all comments", list})}
    });
}

exports.create = (req, res) =>{
    let comment ;
    if(!req.body.username){
        comment = new Comment({
            username : "unknow"
        });
    }else{
        comment = new Comment({});
    }
    
    comment = Object.assign(comment, req.body);
    comment.save().then(() => {
        res.json({status: "OK",message: "A comment is successfully recorded!", comment});
    }).catch((err) => {res.json({status : 500 , err})});
}

exports.delete = (req, res) => {
    Comment.findByIdAndRemove({ _id: req.body.id }, (err, comment) => {
        if (err) {res.json(err)}
        else {
            if(!comment){
                res.json({status: 401 , message : "Comment not found!" })
            }else{
                comment.find().sort({ creation: "descending" }).exec((err, list) => {
                    if (err) {
                        res.status(500).send(err);
                    } else
                        res.json({status: "OK", message: "A comment is successfully deleted", list});
                    });
            }
            
        }
    });
}

exports.update = (req, res) =>{
    const newComment = Object.assign(commnet, req.body);
    Commnet.findOneAndUpdate({ _id: req.body._id },{ $set: newComment },(error, comment) => {
        if (error) {res.status(500).send(error)}
        else { res.json({status: 201,message: "Setting mise à jour avec succès.", comment})}
    });
}

