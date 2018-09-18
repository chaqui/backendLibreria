'use strict'

module.exports = function setupProveedor (TCProveedorModel) {
  /**
   * 
   * @param {int} id del proveedor a buscar
   * @returns {object} roveedor encontrado
   */
  function findById (id) {
    const result = TCProveedorModel.findById(id)
    return result
  }

  /**
   * 
   * @param { nombre: '', nit: '', direccion: '', descripcion: '', telefono: '', TCRepresentanteId: 3} proveedor
   * @returns {Object} proveedor creado
   */
  async function create (proveedor) {
    const result = await TCProveedorModel.create(proveedor)
    return result.toJSON()
  }

  /**
   *
   * @param {string} nombre a buscar
   * @returns {Array} lista de proveedores encontrados
   */
  function findByNombre (nombre) {
    const cond = {
      where:
      {
        nombre
      }
    }
    const result = TCProveedorModel.findOne(cond)
    return result
  }
  /**
   *
   * @param {nombre: '', nit: '', direccion: '', descripcion: '', telefono: '', TCRepresentanteId: 1,id: 1} proveedor
   * @returns {int} cantidad de filas cambiadas
   */
  async function update (proveedor) {
    const cond = {
      where: {
        id: proveedor.id
      }
    }

    const update = await TCProveedorModel.update(proveedor, cond)
    return update
  }

  /**
   * @returns {Array} todos los proveedores almacenados
   */
  function findAll () {
    return TCProveedorModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
