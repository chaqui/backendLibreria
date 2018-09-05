'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTT_descripcionVenta (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_descripcionVenta', {
    total: {
      type: Sequelize.DOUBLE,
      allowNull: false
    }
  })
}
