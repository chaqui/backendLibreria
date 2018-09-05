'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_ingresos (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_ingresos', {
    cantidad: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    },
    precio: {
      type: Sequelize.DOUBLE,
      allowNull: false
    }
  })
}
