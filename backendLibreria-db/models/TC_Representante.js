'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Representante (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Representante', {
    estado: {
      type: Sequelize.STRING(3),
      allowNull: false
    }
  })
}
