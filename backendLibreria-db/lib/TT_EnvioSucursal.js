'use strict'

module.exports = function setupEnvioSucursal (TTEnvioSucursalModel) {
  function findById (id) {
    const result = TTEnvioSucursalModel.findById(id)
    return result.toJSON
  }
  // @params envioSucursal

  async function create (envioSucursal) {
    const result = await TTEnvioSucursalModel.create(envioSucursal)
    return result.toJSON()
  }

  function findByNombre (envioSucursal) {
    const cond = {
      where:
      {
        primerNombre: envioSucursal.primerNombre,
        segundoNombre: envioSucursal.segundoNombre
      }
    }
    const result = TTEnvioSucursalModel.findOne(cond)
    return result.toJSON()
  }

  async function update (envioSucursal) {
    const cond = {
      where: {
        id: envioSucursal.id
      }
    }

    const update = await TTEnvioSucursalModel.update(envioSucursal, cond)
    return update
  }

  function findAll () {
    return TTEnvioSucursalModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
