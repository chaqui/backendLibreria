'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_ProductoSucursal (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_ProductoSucursal',{
        alarma:{
            type:Sequelize.DOUBLE,
            allowNull:false
        }
    })
}