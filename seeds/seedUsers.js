"use strict";
const bcrypt = require('bcryptjs')

const User = require('../models/user.model');
const users = [{
    username : "admin",
    password : bcrypt.hashSync("admin",8)
}]

let seedUsers = function() {
    try {
        User.estimatedDocumentCount((err,count) => {
                if(!err && count == 0){
                for(let user of users) {
                    new User({
                        ...user
                    }).save((err) => {
                        if(err){ console.log(err)}
                        console.log('admin super-user added to database');
                    })
                }
            }
    })} catch(err) {
        console.log(err)
    }
}

module.exports = { seedUsers };
