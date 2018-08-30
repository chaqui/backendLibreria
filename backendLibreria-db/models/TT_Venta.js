'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_Venta (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_Venta',{
        fecha:{
            type:Sequelize.DATE,
            allowNull:false
        }
    })
}