'use strict'

module.exports = function setupProductoVendido (TTproductoVendido) {
  function findById (id) {
    const result = TTproductoVendido.findById(id)
    return result.toJSON
  }
  // @params productoVendido

  async function create (productoVendido) {
    let productoVendidoE = findById(productoVendido.id)
    if (productoVendidoE) {
      return 0
    }
    const result = await TTproductoVendido.create(productoVendido)
    return result.toJSON()
  }

  function findByNombre (productoVendido) {
    const cond = {
      where:
      {
        primerNombre: productoVendido.primerNombre,
        segundoNombre: productoVendido.segundoNombre
      }
    }
    const result = TTproductoVendido.findOne(cond)
    return result.toJSON()
  }

  async function update (productoVendido) {
    const cond = {
      where: {
        id: productoVendido.id
      }
    }

    const update = await TTproductoVendido.update(productoVendido, cond)
    return update ? TTproductoVendido.findOne(cond): existingproductoVendido
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
