const jwt = require("jsonwebtoken");

verifyToken = (req, res, next) => {
let token = req.headers["x-access-token"] || req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

if (!token) {return res.status(403).send({ message: "No token provided!" })}
jwt.verify(token, "secrets", (err, decoded) => {
    if (err) {return res.status(401).send({ message: "Unauthorized!" })}
    req.userId = decoded.id;
    next();
});
}; 

const authJwt = {verifyToken};
module.exports = authJwt;