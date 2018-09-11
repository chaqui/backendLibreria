'use strict'

module.exports = function setupSaldoPagado (TTSaldoPagado) {
  function findById (id) {
    const result = TTSaldoPagado.findById(id)
    return result.toJSON
  }
  // @params saldoPagado

  async function create (saldoPagado) {
    let saldoPagadoE = findById(saldoPagado.id)
    if (saldoPagadoE) {
      return 0
    }
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
    return update ? TTSaldoPagado.findOne(cond): existingsaldoPagado
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
