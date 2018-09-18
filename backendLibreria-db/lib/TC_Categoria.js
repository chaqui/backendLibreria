'use strict'

module.exports = function setupTCCategoria (TCCategorialModel) {
  /**
   *
   * @param {int} id de la categoria
   * @returns {object} categoria encontrada
   */
  function findById (id) {
    const result = TCCategorialModel.findById(id)
    return result
  }

  /**
   *
   * @param {nombre:""} categoria
   */
  async function create (categoria) {
    const result = await TCCategorialModel.create(categoria)
    return result.toJSON()
  }

  /**
   *
   * @param {tring} nombre
   * @returns {Array} categorias encontradas con el nombre
   */
  function findByNombre (nombre) {
    const cond = {
      where:
      {
        nombre
      }
    }
    const result = TCCategorialModel.findAll(cond)
    return result
  }

  /**
   *
   * @param {nombre: '', id: 1} categoria
   * @returns {int} cantidad de filas modificads
   */
  async function update (categoria) {
    const cond = {
      where: {
        id: categoria.id
      }
    }

    const update = await TCCategorialModel.update(categoria, cond)
    return update
  }

  /**
   * @returns {Array} todas las categorias
   */
  function findAll () {
    return TCCategorialModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }

    
  
}