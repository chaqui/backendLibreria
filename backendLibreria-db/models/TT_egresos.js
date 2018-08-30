'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_egresos (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_egresos',{
        cantidad:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        fecha:{
            type:Sequelize.DATE,
            allowNull:false
        },
        precio:{
            type:Sequelize.DOUBLE,
            allowNull:false
        }
    })
}