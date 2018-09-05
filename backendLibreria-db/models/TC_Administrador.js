'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupTC_Administrador (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Administrador', {

  })
}
