'use strict'

module.exports = function setupDescripcionVenta (TTDescripcionVentaModel) {
  function findById (id) {
    const result = TTDescripcionVentaModel.findById(id)
    return result.toJSON
  }
  // @params descripcionVenta

  async function create (descripcionVenta) {
    let descripcionVentaE = findById(descripcionVenta.id)
    if (descripcionVentaE) {
      return 0
    }
    const result = await TTDescripcionVentaModel.create(descripcionVenta)
    return result.toJSON()
  }

  function findByNombre (descripcionVenta) {
    const cond = {
      where:
      {
        primerNombre: descripcionVenta.primerNombre,
        segundoNombre: descripcionVenta.segundoNombre
      }
    }
    const result = TTDescripcionVentaModel.findOne(cond)
    return result.toJSON()
  }

  async function update (descripcionVenta) {
    const cond = {
      where: {
        id: descripcionVenta.id
      }
    }

    const update = await TTDescripcionVentaModel.update(descripcionVenta, cond)
    return update ? TTDescripcionVentaModel.findOne(cond): existingdescripcionVenta
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
