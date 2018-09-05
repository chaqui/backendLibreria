'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Proveedor (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Proveedor', {
    nombre: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    nit: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    telefono: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  })
}
