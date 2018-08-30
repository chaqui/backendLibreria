'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Usuario (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_Usuario',{
        nickname:{
            type:Sequelize.STRING(39),
            allowNull:false
        },
        contrasenia:{
        type:Sequelize.STRING(10),
        allowNull:false
        },
        autorizado:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        }
    })
}