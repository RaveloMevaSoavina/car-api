"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehiculeSchema = new Schema({
    brand : {type: String, required:true},
    model : {type: String, required:true},
    matricule : {type: String, required:true},
    color : {type: String, required:true},
    categorie : {type: String, required:true},
    puissance : {type: String, required:true},
    comments : {type: String},
    year : {type: String, required:true}
});

module.exports = mongoose.model('vehicule', VehiculeSchema);