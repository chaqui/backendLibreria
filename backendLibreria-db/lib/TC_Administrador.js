'use strict'

module.exports = function setupAdministrador (TCAdministradorModel) {
  function findById (id) {
    const result = TCAdministradorModel.findById(id)
    return result.toJSON
  }
  // @params administrador

  async function create (administrador) {
    let administradorE = findById(administrador.id)
    if (administradorE) {
      return 0
    }
    const result = await TCAdministradorModel.create(administrador)
    return result.toJSON()
  }

  function findByNombre (administrador) {
    const cond = {
      where:
      {
        primerNombre: administrador.primerNombre,
        segundoNombre: administrador.segundoNombre
      }
    }
    const result = TCAdministradorModel.findOne(cond)
    return result.toJSON()
  }

  async function update (administrador) {
    const cond = {
      where: {
        id: administrador.id
      }
    }

    const update = await TCAdministradorModel.update(administrador, cond)
    return update ? TCAdministradorModel.findOne(cond): existingadministrador
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
