"use strict";

const colors = require("colors");

const Car = require('../models/car.model');
const vehicules = [{
    brand : "Peaugot",
    model : "205", 
    matricule : "1167TS",
    color : "blue",
    categorie : "Essence",
    puissance : "100ch",
    year : "1987"
},{
    brand: "Citroën", 
    model: "Berlingo", 
    matricule : "2819TAB",
    color : "rouge",
    categorie : "Gasoil",
    puissance : "150ch",
    year : "2003"
},{
    brand: "Renault", 
    model: "Clio", 
    matricule : "9098TH",
    color : "noir",
    categorie : "Gasoil",
    puissance : "98ch",
    year : "2007"
},{
    brand: "Land Rover", 
    model: "Defender",
    matricule : "3488TF",
    color : "Blanc",
    categorie : "Essence",
    puissance : "210ch",
    year : "1990"
},{
    brand: "Hyundai", 
    model: "Atos", 
    matricule : "2228FA",
    color : "Gris",
    categorie : "Gasoil",
    puissance : "178ch",
    year : "2009"
}]

let seedVehicules = function() {
    try {
        Car.estimatedDocumentCount((err,count) => {
                if(!err && count == 0){
                for(let vehicule of vehicules) {
                    new Car({
                        ...vehicule
                    }).save((err) => {
                        if(err){ console.log(err)}
                        console.log('Vehicules added to database'.blue);
                    })
                }
            }
    })} catch(err) {
        console.log(err)
    }
}

const seed = {seedVehicules};
module.exports = seed;
