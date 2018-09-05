'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Categoria (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Categoria', {
    nombre: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  })
}
