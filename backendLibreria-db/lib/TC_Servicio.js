'use strict'

module.exports = function setupServicio (TCServicioModel) {
  function findById (id) {
    const result = TCServicioModel.findById(id)
    return result.toJSON
  }
  // @params servicio

  async function create (servicio) {
    let servicioE = findById(servicio.id)
    if (servicioE) {
      return 0
    }
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
    return update ? TCServicioModel.findOne(cond): existingservicio
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
