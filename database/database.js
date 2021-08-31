const mongoose= require("mongoose");
const { seedVehicules } = require('../seeds/seedVehicules');
const { seedUsers } = require('../seeds/seedUsers')
const { seedComments } = require('../seeds/seedComments')

const colors = require("colors")
/*
 * SAMPLE_DATABASE : name of the DATABASE (please set SAMPLE_DATABASE to your own database name)
 */

mongoose.connect("mongodb://127.0.0.1:27017/vehicules", {
useNewUrlParser: true,
useUnifiedTopology: true,
});

// connection to database error
mongoose.connection.on("error", console.error.bind(console, "connection error:".red));
// connection to database successfuly
mongoose.connection.once("open", () => {
    console.log("DB connection established !".yellow)
    seedUsers();
    seedVehicules();
    seedComments();
});
