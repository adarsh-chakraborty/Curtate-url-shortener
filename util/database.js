const { Sequelize } = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: process.env.DBHOST,
  dialect: 'mysql' // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' 
});


module.exports = sequelize;