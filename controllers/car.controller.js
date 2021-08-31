const Car = require('../models/car.model');

exports.retrieve = (req, res) => {
    Car.find()
    .sort({ creation: "descending" })
    .exec(function (err, list) {
        if (err) {res.status(500).send(err);}
        else {res.json({status: 200 ,message: "List of all cars.", list})}
    });
}

exports.create = (req, res) =>{
    let car = new Car({});
    car = Object.assign(car, req.body);
    car.save().then((car) => {
        res.json({status: "OK",message: "A car is successfully recorded!", car});
    }).catch((err) => {res.json({status : 500 , err})});
}

exports.delete = (req, res) => {
    Car.findByIdAndRemove({ _id: req.body._id }, (err, car) => {
        if (err) {res.json(err)}
        else {Car.find().sort({ creation: "descending" }).exec((err, list) => {
            if (err) {
                res.status(500).send(err);
            } else
                res.json({status: "OK", message: "A car is successfully deleted", list});
            });
        }
    });
}

exports.update = (req, res) =>{
    const newCar = Object.assign(car, req.body);
    Car.findOneAndUpdate({ _id: req.body._id },{ $set: newCar },(error, car) => {
        if (error) {res.status(500).send(error)}
        else { res.json({status: 201,message: "Setting mise à jour avec succès.",car,})}
    });
}

