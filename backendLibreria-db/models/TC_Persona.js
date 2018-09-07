'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTCPersona (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Persona', {
    primerNombre: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    segundoNombre: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    primerApellido: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    segundoApellido: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    telefono: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING(40),
      allowNull: false
    }
  })
}
