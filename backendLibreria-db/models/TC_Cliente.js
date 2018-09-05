'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Cliente (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Cliente', {
    nit: {
      type: Sequelize.STRING(12),
      allowNull: false
    }
  })
}
