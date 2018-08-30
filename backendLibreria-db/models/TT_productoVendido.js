'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_productoVendido (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_productoVendido',{

    })
}