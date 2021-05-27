const {DataTypes} = require('sequelize');   //1
const db = require('../db');    //2

const Pie = db.define('pie', {  //3
    nameOfPie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    baseOfPie: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    crust: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timeToBake: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ratings: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Pie;

/*

? 1. Object destructuring is used to extrapolate the DataTypes object from the sequelize dependency

? 2.  We import the connection to our database that we set up in the db.js

? 3. This is where the definition and the properties of the model takes place. We cal the .define() method. This is a sequelize method that will map model properties.

! Table names are pluralized in Postgres. (Pie vs Pies)

*/ 