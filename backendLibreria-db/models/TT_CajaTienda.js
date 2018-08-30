'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_CajaTienda (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_CajaTienda',{
        cantidad:{
            type:Sequelize.DOUBLE,
            allowNull:false
        },
        fecha:{
        type:Sequelize.DATE,
        allowNull:false
        }
    })
}