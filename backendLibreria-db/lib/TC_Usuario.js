'use strict'

module.exports = function setupUsuario (TCUsuarioModel) {
  function findById (id) {
    const result = TCUsuarioModel.findById(id)
    return result.toJSON
  }
  // @params usuario

  async function create (usuario) {
    let usuarioE = findById(usuario.id)
    if (usuarioE) {
      return 0
    }
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
    return update ? TCUsuarioModel.findOne(cond): existingusuario
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}
