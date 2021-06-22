const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Url = sequelize.define('url',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    surl:{
        type: Sequelize.STRING,
        allowNull: false
    },
    durl:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Url;