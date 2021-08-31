const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
    if (req.body.username) {
        User.findOne({username: req.body.username}).exec((err, user) => {
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            var token = jwt.sign({ id: user.id }, "secrets", {expiresIn: 86400});
            if (err) {res.json({status : 400 , err})}
            if (!user) {res.json({status : 200 , message: "Utilisateur invalide"})}
            if (!passwordIsValid) return res.json({status : 200 , message: "Mot de passe invalide"});
            const usr = {_id: user.id,username: user.username,};
            res.json({status: 200, message : "user authentified" , user: usr, token});
        })}
}

exports.signup = (req, res) =>{
    const user = new User({username: req.body.username, password: bcrypt.hashSync(req.body.password, 8)});
    user.save((err, user) => {
    if (err) {res.status(500).send({ message: err })}
    const token = jwt.sign({ id: user.id }, "secrets", {expiresIn: 86400})
    res.json({status: 201, message: "User was registered successfully!", user,token});
    })
}
