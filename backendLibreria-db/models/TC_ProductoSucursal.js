'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_ProductoSucursal (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_ProductoSucursal', {
    alarma: {
      type: Sequelize.DOUBLE,
      allowNull: false
    }
  })
}
