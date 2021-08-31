"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    carMatricule : {type: String , required : true},
    username : {type: String , required : true},
    comment : {type: String , required : true},
});

module.exports = mongoose.model('comment', CommentSchema);