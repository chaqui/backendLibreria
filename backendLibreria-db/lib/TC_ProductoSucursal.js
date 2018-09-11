'use strict'

module.exports = function setupProductoSucursal (TCProductoSucursalModel) {
  function findById (id) {
    const result = TCProductoSucursalModel.findById(id)
    return result.toJSON
  }
  // @params productoSucursal

  async function create (productoSucursal) {
    let productoSucursalE = findById(productoSucursal.id)
    if (productoSucursalE) {
      return 0
    }
    const result = await TCProductoSucursalModel.create(productoSucursal)
    return result.toJSON()
  }

  function findByNombre (productoSucursal) {
    const cond = {
      where:
      {
        primerNombre: productoSucursal.primerNombre,
        segundoNombre: productoSucursal.segundoNombre
      }
    }
    const result = TCProductoSucursalModel.findOne(cond)
    return result.toJSON()
  }

  async function update (productoSucursal) {
    const cond = {
      where: {
        id: productoSucursal.id
      }
    }

    const update = await TCProductoSucursalModel.update(productoSucursal, cond)
    return update ? TCProductoSucursalModel.findOne(cond): existingproductoSucursal
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
