'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Control (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Control', {
    fechayHora: {
      type: Sequelize.DATE
    }
  })
}
