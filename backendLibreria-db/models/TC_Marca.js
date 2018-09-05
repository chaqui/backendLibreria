'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Marca (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Marca', {
    nombre: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  })
}
