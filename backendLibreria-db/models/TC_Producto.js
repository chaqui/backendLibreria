
const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Producto (config){
    const  Sequelize = setupDatabase(config)
    return Sequelize.define('TC_Producto',{
        nombre:
        {
            type:Sequelize.STRING(45),
            allowNull:false
        },
        descripcion:{
            type:Sequelize.STRING(45),
            allowNull:false
        }
    })
}