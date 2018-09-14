'use strict'

module.exports = function setupControl (TCControlModel) {
  function findById (id) {
    const result = TCControlModel.findById(id)
    return result.toJSON
  }

  /**
   *
   * @param {fechayHora:Date, TCUsuarioid: 1} control
   * @returns {TC_Control} control creado en la base de datos
   */
  async function create (control) {
    const result = await TCControlModel.create(control)
    return result.toJSON()
  }
  /**
   *
   * @param {Date} fechayHora
   * @returns {TC_Control} Control encontrado con la fecha buscada
   */
  function findByDate (fechayHora) {
    const cond = {
      where:
      {
        fechayHora
      }
    }
    const result = TCControlModel.findAll(cond)
    return result
  }

  /**
   *
   * @param {object} control a modificar
   * @returns {int} cantidad de filas cambiadas
   */
  async function update (control) {
    const cond = {
      where: {
        id: control.id
      }
    }

    const update = await TCControlModel.update(control, cond)
    return update
  }

  /**
   * @returns {Array} todos los controles almacenados en la Base de Datos
   */
  function findAll () {
    return TCControlModel.findAll()
  }

  return {
    findById,
    create,
    findByDate,
    update,
    findAll
  }
}
