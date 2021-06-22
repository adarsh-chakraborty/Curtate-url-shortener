require('dotenv').config();
const express = require("express");

const mainRoutes = require("./routes/routes");
const sequelize = require('./util/database');

const app = express();
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(mainRoutes);


sequelize.sync().then(()=> {
    app.listen(3000);
    console.log("Server is live.");
});
