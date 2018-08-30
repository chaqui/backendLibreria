'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Control (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_Control',{
        fechayHora:{
            type:Sequelize.DATE
        }
    })
}