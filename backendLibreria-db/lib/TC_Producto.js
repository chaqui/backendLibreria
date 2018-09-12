'use strict'

module.exports = function setupProdducto (TCProductoModel) {
  function findById (id) {
    const result = TCProductoModel.findById(id)
    return result.toJSON
  }
  // @params prodducto

  async function create (prodducto) {
    const result = await TCProductoModel.create(prodducto)
    return result.toJSON()
  }

  function findByNombre (prodducto) {
    const cond = {
      where:
      {
        primerNombre: prodducto.primerNombre,
        segundoNombre: prodducto.segundoNombre
      }
    }
    const result = TCProductoModel.findOne(cond)
    return result.toJSON()
  }

  async function update (prodducto) {
    const cond = {
      where: {
        id: prodducto.id
      }
    }

    const update = await TCProductoModel.update(prodducto, cond)
    return update
  }

  function findAll () {
    return TCProductoModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
