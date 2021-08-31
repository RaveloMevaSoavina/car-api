// MODULES IMPORTATIONS ES6
const express= require("express");
const dotenv= require("dotenv");
const cors = require("cors");
const methodOverride = require("method-override");
const colors = require("colors")

// INTERNAL MODULES IMPORTATIONS 
const database = require("./database/database.js");
const carRoute = require('./routes/car.route');
const commentRoutes = require("./routes/comment.route");
const authRoutes = require("./routes/auth.route");

// CONFIGURATIONS
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();



// MIDDLEWARES
app.use("/public", express.static(__dirname + "/public"));
app.use(cors());
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// ROUTES MIDDLEWARES
app.use("/api/v1/car",carRoute);
app.use("/api/v1/comment", commentRoutes);
app.use("/api/v1/auth", authRoutes);

// LISTENING SERVER
app.listen(PORT, () => console.log(`The server is up and running on http://localhost:${PORT}`.green));