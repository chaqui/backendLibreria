'use strict'

module.exports = function setupSaldoPagado (TTSaldoPagado) {
  function findById (id) {
    const result = TTSaldoPagado.findById(id)
    return result.toJSON
  }
  // @params saldoPagado

  async function create (saldoPagado) {
    const result = await TTSaldoPagado.create(saldoPagado)
    return result.toJSON()
  }

  function findByNombre (saldoPagado) {
    const cond = {
      where:
      {
        primerNombre: saldoPagado.primerNombre,
        segundoNombre: saldoPagado.segundoNombre
      }
    }
    const result = TTSaldoPagado.findOne(cond)
    return result.toJSON()
  }

  async function update (saldoPagado) {
    const cond = {
      where: {
        id: saldoPagado.id
      }
    }

    const update = await TTSaldoPagado.update(saldoPagado, cond)
    return update
  }

  function findAll () {
    return TTSaldoPagado.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
