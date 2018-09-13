'use strict'

module.exports = function setupPersona (TCpersonaModel) {
  function findById (id) {
    return TCpersonaModel.findById(id)
  }

  /**
   *
   * @param {primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', telefono: '', direccion: '' }} persona 
   * @returns {object} persona creada
   */
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
    const result = TCpersonaModel.findAll(cond)
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
