'use strict'

module.exports = function setupRepresentante (TCRepresentanteModel) {
  function findById (id) {
    const result = TCRepresentanteModel.findById(id)
    return result.toJSON
  }
  // @params representante

  async function create (representante) {
    let representanteE = findById(representante.id)
    if (representanteE) {
      return 0
    }
    const result = await TCRepresentanteModel.create(representante)
    return result.toJSON()
  }

  function findByNombre (representante) {
    const cond = {
      where:
      {
        primerNombre: representante.primerNombre,
        segundoNombre: representante.segundoNombre
      }
    }
    const result = TCRepresentanteModel.findOne(cond)
    return result.toJSON()
  }

  async function update (representante) {
    const cond = {
      where: {
        id: representante.id
      }
    }

    const update = await TCRepresentanteModel.update(representante, cond)
    return update ? TCRepresentanteModel.findOne(cond): existingrepresentante
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
