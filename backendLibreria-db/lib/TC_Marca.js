'use strict'

module.exports = function setupMarca (TCMarcaModel) {
  /**
   *
   * @param {int} id
   * @returns {object} Marca encontrada
   */
  function findById (id) {
    const result = TCMarcaModel.findById(id)
    return result
  }

  /**
   *
   * @param {nombre: '', TCProveedorId: 1} marca
   * @returns {object} marca creada
   */
  async function create (marca) {
    const result = await TCMarcaModel.create(marca)
    return result.toJSON()
  }

  /**
   *
   * @param {String} nombre
   * @returns {array} marcas encontradas en la base de datos
   */
  function findByNombre (nombre) {
    const cond = {
      where:
      {
        nombre
      }
    }
    const result = TCMarcaModel.findAll(cond)
    return result
  }

  /**
   *
   * @param { nombre: '', id: 2} marca
   * @returns {int} cantidad de filas modificadas
   */
  async function update (marca) {
    const cond = {
      where: {
        id: marca.id
      }
    }

    const update = await TCMarcaModel.update(marca, cond)
    return update
  }

  /**
  * @returns {Array} todos los proveedores almacenados
  */
  function findAll () {
    return TCMarcaModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
