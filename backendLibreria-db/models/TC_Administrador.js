'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Administrador (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_Administrador',{

    })
}