'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_envioASucursal (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TT_envioASucursal',{
        cantidad:{
            type:Sequelize.BIGINT,
            allowNull:false
        },
        fecha:{
        type:Sequelize.DATE,
        allowNull:false
        },
        enviado:{
        type:Sequelize.BOOLEAN,
        allowNull:false
        },
        recibido:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
    })
}