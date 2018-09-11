'use strict'

module.exports = function setupPersona (TCpersonaModel) {
  function findById (id) {
    const result = TCpersonaModel.findById(id)
    return result.toJSON
  }
  // @params persona

  async function create (persona) {
    let personaE = findById(persona.id)
    if (personaE) {
      return 0
    }
    const result = await TCpersonaModel.create(persona)
    return result.toJSON()
  }

  function findByNombre (persona) {
    const cond = {
      where:
      {
        primerNombre: persona.primerNombre,
        segundoNombre: persona.segundoNombre
      }
    }
    const result = TCpersonaModel.findOne(cond)
    return result.toJSON()
  }

  async function update (persona) {
    const cond = {
      where: {
        id: persona.id
      }
    }

    const update = await TCpersonaModel.update(persona, cond)
    return update ? TCpersonaModel.findOne(cond): existingPersona
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
