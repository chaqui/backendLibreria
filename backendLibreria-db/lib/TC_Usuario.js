'use strict'

module.exports = function setupUsuario (TCUsuarioModel) {
  function findById (id) {
    const result = TCUsuarioModel.findById(id)
    return result.toJSON
  }
  // @params usuario

  async function create (usuario) {
    const result = await TCUsuarioModel.create(usuario)
    return result.toJSON()
  }

  function findByNombre (usuario) {
    const cond = {
      where:
      {
        primerNombre: usuario.primerNombre,
        segundoNombre: usuario.segundoNombre
      }
    }
    const result = TCUsuarioModel.findOne(cond)
    return result.toJSON()
  }

  async function update (usuario) {
    const cond = {
      where: {
        id: usuario.id
      }
    }

    const update = await TCUsuarioModel.update(usuario, cond)
    return update
  }

  function findAll () {
    return TCUsuarioModel.findAll()
  }
  return {
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
