'use strict'

module.exports = function setupMarca (TCMarcaModel) {
  function findById (id) {
    const result = TCMarcaModel.findById(id)
    return result.toJSON
  }
  // @params marca

  async function create (marca) {
    let marcaE = findById(marca.id)
    if (marcaE) {
      return 0
    }
    const result = await TCMarcaModel.create(marca)
    return result.toJSON()
  }

  function findByNombre (marca) {
    const cond = {
      where:
      {
        primerNombre: marca.primerNombre,
        segundoNombre: marca.segundoNombre
      }
    }
    const result = TCMarcaModel.findOne(cond)
    return result.toJSON()
  }

  async function update (marca) {
    const cond = {
      where: {
        id: marca.id
      }
    }

    const update = await TCMarcaModel.update(marca, cond)
    return update ? TCMarcaModel.findOne(cond): existingmarca
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
