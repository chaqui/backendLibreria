'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_descripcionVenta (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_descripcionVenta',{
        total:{
            type:Sequelize.DOUBLE,
            allowNull:false
        }
    })
}