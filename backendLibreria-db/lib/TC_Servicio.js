'use strict'

module.exports = function setupServicio (TCServicioModel) {
  function findById (id) {
    const result = TCServicioModel.findById(id)
    return result.toJSON
  }
  // @params servicio

  async function create (servicio) {
    const result = await TCServicioModel.create(servicio)
    return result.toJSON()
  }

  function findByNombre (servicio) {
    const cond = {
      where:
      {
        primerNombre: servicio.primerNombre,
        segundoNombre: servicio.segundoNombre
      }
    }
    const result = TCServicioModel.findOne(cond)
    return result.toJSON()
  }

  async function update (servicio) {
    const cond = {
      where: {
        id: servicio.id
      }
    }

    const update = await TCServicioModel.update(servicio, cond)
    return update
  }

  function findAll () {
    return TCServicioModel.findAll()
  }
  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
