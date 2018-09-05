'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_Venta (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_Venta', {
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })
}
