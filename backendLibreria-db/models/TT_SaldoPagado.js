'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_SaldoPagado (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_SaldoPagado', {
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
