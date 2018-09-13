'use strict'

module.exports = function setupRepresentante (TCRepresentanteModel) {
  /**
   *
   * @param {int} id
   * @returns {object} representante encontrado con el id buscado
   */
  function findById (id) {
    const result = TCRepresentanteModel.findById(id)
    return result
  }

  /**
   *
   * @param { estado: '', TCPersonaId: 1} representante
   * @returns {object} representante creado
   */
  async function create (representante) {
    const result = await TCRepresentanteModel.create(representante)
    return result.toJSON()
  }

  /**
   *
   * @param {string} estado
   * @returns {array} lista de representantes con ese estado ingresado
   */
  function findByEstado (estado) {
    const cond = {
      where:
      {
        estado: estado
      }
    }
    const result = TCRepresentanteModel.findAll(cond)
    return result
  }
  /**
   *
   * @param {id:1,estado:""} representante
   * @returns {int} cantidad de filas modificadas
   */
  async function update (representante) {
    const cond = {
      where: {
        id: representante.id
      }
    }

    const update = await TCRepresentanteModel.update(representante, cond)
    return update
  }
  /**
   * @returns {array} todos los representantes almacenados en la base de datos
   */
  function findAll () {
    return TCRepresentanteModel.findAll()
  }

  return {
    findById,
    create,
    findByEstado,
    update,
    findAll
  }
}
