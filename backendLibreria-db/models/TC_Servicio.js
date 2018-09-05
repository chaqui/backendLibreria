'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Servicio (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Servicio', {
    precio: {
      type: Sequelize.DOUBLE,
      allowNull: false
    }
  })
}
