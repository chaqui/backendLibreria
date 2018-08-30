'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_SaldoADeber (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_SaldoADeber',{
        cantidad:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        fecha:{
            type:Sequelize.DATE,
            allowNull:false
        }
    })
}