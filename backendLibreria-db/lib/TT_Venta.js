'use strict'

module.exports = function setupVenta (TTVentaModel) {
  function findById (id) {
    const result = TTVentaModel.findById(id)
    return result.toJSON
  }
  // @params venta

  async function create (venta) {
    let ventaE = findById(venta.id)
    if (ventaE) {
      return 0
    }
    const result = await TTVentaModel.create(venta)
    return result.toJSON()
  }

  function findByNombre (venta) {
    const cond = {
      where:
      {
        primerNombre: venta.primerNombre,
        segundoNombre: venta.segundoNombre
      }
    }
    const result = TTVentaModel.findOne(cond)
    return result.toJSON()
  }

  async function update (venta) {
    const cond = {
      where: {
        id: venta.id
      }
    }

    const update = await TTVentaModel.update(venta, cond)
    return update ? TTVentaModel.findOne(cond): existingventa
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
