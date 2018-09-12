'use strict'

module.exports = function setupProveedor (TCProveedorModel) {
  function findById (id) {
    const result = TCProveedorModel.findById(id)
    return result.toJSON
  }
  // @params proveedor

  async function create (proveedor) {
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
    return update
  }

  function findAll () {
    return TCProveedorModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
