'use strict'

module.exports = function setupSucursal (TCSucursalModel) {
  function findById (id) {
    const result = TCSucursalModel.findById(id)
    return result
  }
  // @params sucursal

  async function create (sucursal) {
    const result = await TCSucursalModel.create(sucursal)
    return result.toJSON()
  }

  async function update (sucursal) {
    const cond = {
      where: {
        id: sucursal.id
      }
    }

    const update = await TCSucursalModel.update(sucursal, cond)
    return update
  }

  function findAll () {
    return TCSucursalModel.findAll()
  }

  return {
    findById,
    create,
    update,
    findAll
  }
}
