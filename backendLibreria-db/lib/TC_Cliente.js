'use strict'

module.exports = function setupCliente (TCClienteModel) {
  function findById (id) {
    const result = TCClienteModel.findById(id)
    return result.toJSON
  }
  async function create (cliente) {
    const result = await TCClienteModel.create(cliente)
    return result.toJSON()
  }

  function findByNombre (cliente) {
    const cond = {
      where:
      {
        primerNombre: cliente.primerNombre,
        segundoNombre: cliente.segundoNombre
      }
    }
    const result = TCClienteModel.findOne(cond)
    return result.toJSON()
  }

  async function update (cliente) {
    const cond = {
      where: {
        id: cliente.id
      }
    }

    const update = await TCClienteModel.update(cliente, cond)
    return update
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
