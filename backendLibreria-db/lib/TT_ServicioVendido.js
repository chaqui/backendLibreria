'use strict'

module.exports = function setupServicioVendido (TTServicioVendidoModel) {
  function findById (id) {
    const result = TTServicioVendidoModel.findById(id)
    return result.toJSON
  }
  // @params servicioVendido

  async function create (servicioVendido) {
    const result = await TTServicioVendidoModel.create(servicioVendido)
    return result.toJSON()
  }

  function findByNombre (servicioVendido) {
    const cond = {
      where:
      {
        primerNombre: servicioVendido.primerNombre,
        segundoNombre: servicioVendido.segundoNombre
      }
    }
    const result = TTServicioVendidoModel.findOne(cond)
    return result.toJSON()
  }

  async function update (servicioVendido) {
    const cond = {
      where: {
        id: servicioVendido.id
      }
    }

    const update = await TTServicioVendidoModel.update(servicioVendido, cond)
    return update
  }

  function findAll () {
    return TTServicioVendidoModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
