'use strict'

module.exports = function setupPersona (TCpersonaModel) {
  function findById (id) {
    return TCpersonaModel.findById(id)
  }
  // @params persona

  async function create (persona) {
    const result = await TCpersonaModel.create(persona)
    return result.toJSON()
  }

  function findAll () {
    return TCpersonaModel.findAll()
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
    return update
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
