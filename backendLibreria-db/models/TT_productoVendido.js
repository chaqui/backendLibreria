'use strict'

const setupDatabase = require('../lib/db')

module.exports = function setupTT_productoVendido (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TT_productoVendido', {

  })
}
