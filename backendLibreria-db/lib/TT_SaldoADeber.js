'use strict'

module.exports = function setupSaldoADeber (TTsaldoADeber) {
  function findById (id) {
    const result = TTsaldoADeber.findById(id)
    return result.toJSON
  }
  // @params saldoADeber

  async function create (saldoADeber) {
    let saldoADeberE = findById(saldoADeber.id)
    if (saldoADeberE) {
      return 0
    }
    const result = await TTsaldoADeber.create(saldoADeber)
    return result.toJSON()
  }

  function findByNombre (saldoADeber) {
    const cond = {
      where:
      {
        primerNombre: saldoADeber.primerNombre,
        segundoNombre: saldoADeber.segundoNombre
      }
    }
    const result = TTsaldoADeber.findOne(cond)
    return result.toJSON()
  }

  async function update (saldoADeber) {
    const cond = {
      where: {
        id: saldoADeber.id
      }
    }

    const update = await TTsaldoADeber.update(saldoADeber, cond)
    return update ? TTsaldoADeber.findOne(cond): existingsaldoADeber
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
