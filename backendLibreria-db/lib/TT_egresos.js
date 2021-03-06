'use strict'

module.exports = function setupEgresos (TTEgresosModel) {
  function findById (id) {
    const result = TTEgresosModel.findById(id)
    return result.toJSON
  }
  // @params egresos

  async function create (egresos) {
    const result = await TTEgresosModel.create(egresos)
    return result.toJSON()
  }

  function findByNombre (egresos) {
    const cond = {
      where:
      {
        primerNombre: egresos.primerNombre,
        segundoNombre: egresos.segundoNombre
      }
    }
    const result = TTEgresosModel.findOne(cond)
    return result.toJSON()
  }

  async function update (egresos) {
    const cond = {
      where: {
        id: egresos.id
      }
    }

    const update = await TTEgresosModel.update(egresos, cond)
    return update
  }

  function findAll () {
    return TTEgresosModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
