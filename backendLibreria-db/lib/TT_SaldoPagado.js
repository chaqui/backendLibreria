'use strict'

module.exports = function setupSaldoPagado (TTSaldoPagado) {
  /**
   *
   * @param {int} id del Saldo
   * @returns {object} saldo encontrado basado en el id
   */
  function findById (id) {
    const result = TTSaldoPagado.findById(id)
    return result
  }

  /**
   *
   * @param { cantidad: 0.00, fecha: Date.now(), TCProveedorId: 2} saldoPagado
   * @returns {objecto} saldo pagado creado
   */
  async function create (saldoPagado) {
    const result = await TTSaldoPagado.create(saldoPagado)
    return result.toJSON()
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
    const result = TTSaldoPagado.findAll(cond)
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
    const result = TTSaldoPagado.findAll(cond)
    return result
  }

  async function update (saldoPagado) {
    const cond = {
      where: {
        id: saldoPagado.id
      }
    }

    const update = await TTSaldoPagado.update(saldoPagado, cond)
    return update
  }

  /**
   * @returns {Array} todos los saldos pagados
   */
  function findAll () {
    return TTSaldoPagado.findAll()
  }

  return {
    findById,
    create,
    findByCantidad,
    findByIdProveedor,
    update,
    findAll
  }
}
