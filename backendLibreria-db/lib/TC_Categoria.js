'use strict'

module.exports = function setupTCCategoria (TCCategorialModel) {
  function findById (id) {
    const result = TCCategorialModel.findById(id)
    return result.toJSON
  }
  async function create (categoria) {
    let categoriaE = findById(categoria.id)
    if (categoriaE) {
      return 0
    }
    const result = await TCCategorialModel.create(categoria)
    return result.toJSON()
  }

  function findByNombre (categoria) {
    const cond = {
      where:
      {
        primerNombre: categoria.primerNombre,
        segundoNombre: categoria.segundoNombre
      }
    }
    const result = TCCategorialModel.findOne(cond)
    return result.toJSON()
  }

  async function update (categoria) {
    const cond = {
      where: {
        id: categoria.id
      }
    }

    const update = await TCCategorialModel.update(categoria, cond)
    return update ? TCCategorialModel.findOne(cond): existingcategoria
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }

    
  
}