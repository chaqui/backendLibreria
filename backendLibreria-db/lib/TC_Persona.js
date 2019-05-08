'use strict'
// complete
module.exports = function setupPersona (TCpersonaModel) {
  function findById (id) {
    return TCpersonaModel.findById(id)
  }

  /**
   *
   * @param {primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', telefono: '', direccion: '' } persona
   * @returns {object} persona creada
   */
  async function create (persona) {
    const result = await TCpersonaModel.create(persona)
    return result.toJSON()
  }
  /**
   * Obtener todas las personas
   */
  function findAll () {
    return TCpersonaModel.findAll()
  }

  /**
   *
   * @param {primerNombre: '', segundoNombre: ''} persona
   */
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
  /**
   *
   * @param {primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', telefono: '', direccion: '' } persona
   */

  async function update (persona) {
    const cond = {
      where: {
        id: persona.id
      }
    }

    const update = await TCpersonaModel.update(persona, cond)
    return update
  }

  /**
   * retorna:
   *  Encontrar el ID               |  findById
   *  Crear Persona                 |  Create
   *  Encontrar Por nombre          |  findbyName
   *  actualizar Persona            |  update
   *  obtener Todas las personas    |  findAll
   */
  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
