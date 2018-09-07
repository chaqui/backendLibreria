'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupTCAdministrador (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Administrador', {

  })
}
