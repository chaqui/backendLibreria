'use strict'

module.exports = function setupProveedor (TCProveedorModel) {
  function findById (id) {
    const result = TCProveedorModel.findById(id)
    return result.toJSON
  }
  // @params proveedor

  async function create (proveedor) {
    let proveedorE = findById(proveedor.id)
    if (proveedorE) {
      return 0
    }
    const result = await TCProveedorModel.create(proveedor)
    return result.toJSON()
  }

  function findByNombre (proveedor) {
    const cond = {
      where:
      {
        primerNombre: proveedor.primerNombre,
        segundoNombre: proveedor.segundoNombre
      }
    }
    const result = TCProveedorModel.findOne(cond)
    return result.toJSON()
  }

  async function update (proveedor) {
    const cond = {
      where: {
        id: proveedor.id
      }
    }

    const update = await TCProveedorModel.update(proveedor, cond)
    return update ? TCProveedorModel.findOne(cond): existingproveedor
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
