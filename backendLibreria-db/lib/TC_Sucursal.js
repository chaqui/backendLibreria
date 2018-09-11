'use strict'

module.exports = function setupSucursal (TCSucursalModel) {
  function findById (id) {
    const result = TCSucursalModel.findById(id)
    return result.toJSON
  }
  // @params sucursal

  async function create (sucursal) {
    let sucursalE = findById(sucursal.id)
    if (sucursalE) {
      return 0
    }
    const result = await TCSucursalModel.create(sucursal)
    return result.toJSON()
  }

  function findByNombre (sucursal) {
    const cond = {
      where:
      {
        primerNombre: sucursal.primerNombre,
        segundoNombre: sucursal.segundoNombre
      }
    }
    const result = TCSucursalModel.findOne(cond)
    return result.toJSON()
  }

  async function update (sucursal) {
    const cond = {
      where: {
        id: sucursal.id
      }
    }

    const update = await TCSucursalModel.update(sucursal, cond)
    return update ? TCSucursalModel.findOne(cond): existingsucursal
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
