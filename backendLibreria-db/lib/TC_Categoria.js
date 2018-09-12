'use strict'

module.exports = function setupTCCategoria (TCCategorialModel) {
  function findById (id) {
    const result = TCCategorialModel.findById(id)
    return result.toJSON
  }
  async function create (categoria) {
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
    return update
  }
  
  function findAll () {
    return TCCategorialModel.findAll()
  }

  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }

    
  
}