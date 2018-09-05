'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_servicioVendido (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_servicioVendido', {
    cantidad: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
}
