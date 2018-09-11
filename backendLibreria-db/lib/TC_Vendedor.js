'use strict'

module.exports = function setupvendedor (TCVendendorModel) {
  function findById (id) {
    const result = TCVendendorModel.findById(id)
    return result.toJSON
  }
  // @params vendedor

  async function create (vendedor) {
    let vendedorE = findById(vendedor.id)
    if (vendedorE) {
      return 0
    }
    const result = await TCVendendorModel.create(vendedor)
    return result.toJSON()
  }

  function findByNombre (vendedor) {
    const cond = {
      where:
      {
        primerNombre: vendedor.primerNombre,
        segundoNombre: vendedor.segundoNombre
      }
    }
    const result = TCVendendorModel.findOne(cond)
    return result.toJSON()
  }

  async function update (vendedor) {
    const cond = {
      where: {
        id: vendedor.id
      }
    }

    const update = await TCVendendorModel.update(vendedor, cond)
    return update ? TCVendendorModel.findOne(cond): existingvendedor
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
