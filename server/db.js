require('dotenv').config();

const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_CONNECTION_STRING);

//const sequelize = new Sequelize('postgres://postgres:AnElephantNF@localhost:5432/pie-api');

module.exports = db;
//module.exports = sequelize;