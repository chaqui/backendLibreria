'use strict'

module.exports = function setupCajaTienda (TTCajaTiendaModel) {
  function findById (id) {
    const result = TTCajaTiendaModel.findById(id)
    return result.toJSON
  }
  // @params cajaTienda

  async function create (cajaTienda) {
    const result = await TTCajaTiendaModel.create(cajaTienda)
    return result.toJSON()
  }

  function findByNombre (cajaTienda) {
    const cond = {
      where:
      {
        primerNombre: cajaTienda.primerNombre,
        segundoNombre: cajaTienda.segundoNombre
      }
    }
    const result = TTCajaTiendaModel.findOne(cond)
    return result.toJSON()
  }

  async function update (cajaTienda) {
    const cond = {
      where: {
        id: cajaTienda.id
      }
    }

    const update = await TTCajaTiendaModel.update(cajaTienda, cond)
    return update
  }

  function findAll () {
    return TTCajaTiendaModel.findAll()
  }
  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
