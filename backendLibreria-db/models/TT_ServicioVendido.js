'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_servicioVendido (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_servicioVendido',{
        cantidad:{
            type:Sequelize.INT,
            allowNull:false
        }
    })
}