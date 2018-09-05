'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Sucursal (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Sucursal', {
    nombre: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING(25),
      allowNull: false
    }
  })
}
