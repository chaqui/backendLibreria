'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_CajaTienda (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_CajaTienda', {
    cantidad: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })
}
