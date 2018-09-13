'use strict'

module.exports = function setupCliente (TCClienteModel) {
  /**
   *
   * @param {Int} id
   * @returns {object} cliente
   */
  function findById (id) {
    const result = TCClienteModel.findById(id)
    return result
  }

  /**
   *
   * @param {nit: '1393403-r', TCPersonaId: 3} cliente
   * @returns {object} cliente creado en la base de datos
   */
  async function create (cliente) {
    const result = await TCClienteModel.create(cliente)
    return result.toJSON()
  }

  /**
   *
   * @param { nit: ''} cliente
   * @returns {array} lista de clientes encontrados
   */
  function findByNit (cliente) {
    const cond = {
      where:
      {
        nit: cliente.nit
      }
    }
    const result = TCClienteModel.findAll(cond)
    return result
  }

  /**
   *
   * @param {id: 1, nit: ''} cliente
   * @returns {int} numero de filas modificadas
   */
  async function update (cliente) {
    const cond = {
      where: {
        id: cliente.id
      }
    }

    const update = await TCClienteModel.update(cliente, cond)
    return update
  }

  /**
   * @returns{array} todos los clientes almacenados
   */
  function findAll () {
    return TCClienteModel.findAll()
  }

  return {
    findById,
    create,
    findByNit,
    update,
    findAll
  }
}
