'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Servicio (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_Servicio',{
        precio:{
            type:Sequelize.DOUBLE,
            allowNull:false
        }
    })
}