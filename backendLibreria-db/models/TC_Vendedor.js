'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Vendedor (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_Vendedor',{
        estado:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        }
    })
}