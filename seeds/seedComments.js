"use strict";
const bcrypt = require('bcryptjs')

const Comment = require('../models/comment.model');
const comments = [{
    carMatricule : "1167TS",
    username : "admin",
    comment : "This is a amazing car! The best of ever!"
},{
    carMatricule : "9098TH",
    username : "admin",
    comment : "Waooouh! Great Things!"
}]

let seedComments = function() {
    try {
        Comment.estimatedDocumentCount((err,count) => {
                if(!err && count == 0){
                for(let comment of comments) {
                    new Comment({
                        ...comment
                    }).save((err) => {
                        if(err){ console.log(err)}
                        console.log('admin comments added to database');
                    })
                }
            }
    })} catch(err) {
        console.log(err)
    }
}

module.exports = { seedComments };
