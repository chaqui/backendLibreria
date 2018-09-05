
const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupTC_Producto (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('TC_Producto', {
    nombre:
        {
          type: Sequelize.STRING(45),
          allowNull: false
        },
    descripcion: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  })
}
