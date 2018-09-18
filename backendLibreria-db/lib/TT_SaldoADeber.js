'use strict'

module.exports = function setupSaldoADeber (TTsaldoADeber) {
  /**
   * 
   * @param {int} id del Saldo 
   * @returns {object} Saldo con el id buscado
   */
  function findById (id) {
    const result = TTsaldoADeber.findById(id)
    return result
  }
  /**
   * 
   * @param {cantidad: 15.50, fecha: Date.now(), TCProveedorId: 1 } saldoADeber
   * @returns {object} Saldo creado
   */
  async function create (saldoADeber) {
    const result = await TTsaldoADeber.create(saldoADeber)
    return result
  }

  /**
   * 
   * @param {double} cantidad
   * @returns {Array} todos los saldos con esa cantidad almacenados
   */
  function findByCantidad (cantidad) {
    const cond = {
      where:
      {
        cantidad
      }
    }
    const result = TTsaldoADeber.findAll(cond)
    return result
  }

  /**
   *
   * @param {int} id del proveedor
   * @returns {Array} todos los saldos del proveedor
   */
  function findByIdProveedor (id) {
    const cond = {
      where:
      {
        TCProveedorId: id
      }
    }
    const result = TTsaldoADeber.findAll(cond)
    return result
  }

  /**
   *
   * @param {  cantidad: 0.00, id: 1} saldoADeber
   * @returns {int} cantidad de filas modificadas
   */
  async function update (saldoADeber) {
    const cond = {
      where: {
        id: saldoADeber.id
      }
    }

    const update = await TTsaldoADeber.update(saldoADeber, cond)
    return update
  }
  /**
   * @returns {Array} todos los Saldos a Deber almacenados
   */
  function findAll () {
    return TTsaldoADeber.findAll()
  }

  return {
    findById,
    create,
    findByCantidad,
    update,
    findAll,
    findByIdProveedor
  }
}
