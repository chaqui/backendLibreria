'use strict'

module.exports = function setupIngreso (TTingresoModel) {
  function findById (id) {
    const result = TTingresoModel.findById(id)
    return result.toJSON
  }
  // @params ingreso

  async function create (ingreso) {
    let ingresoE = findById(ingreso.id)
    if (ingresoE) {
      return 0
    }
    const result = await TTingresoModel.create(ingreso)
    return result.toJSON()
  }

  function findByNombre (ingreso) {
    const cond = {
      where:
      {
        primerNombre: ingreso.primerNombre,
        segundoNombre: ingreso.segundoNombre
      }
    }
    const result = TTingresoModel.findOne(cond)
    return result.toJSON()
  }

  async function update (ingreso) {
    const cond = {
      where: {
        id: ingreso.id
      }
    }

    const update = await TTingresoModel.update(ingreso, cond)
    return update ? TTingresoModel.findOne(cond): existingingreso
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
