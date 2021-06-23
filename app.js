require('dotenv').config();
const express = require("express");
const path = require("path");
const mainRoutes = require("./routes/routes");
const sequelize = require('./util/database');

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(mainRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(()=> {
    app.listen(PORT);
    console.log("Server is live on port: "+PORT);
});
