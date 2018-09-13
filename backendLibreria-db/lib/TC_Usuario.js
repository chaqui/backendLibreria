'use strict'

module.exports = function setupUsuario (TCUsuarioModel) {
  function findById (id) {
    const result = TCUsuarioModel.findById(id)
    return result.toJSON
  }
  /**
    * @param { nickname: 'pepito', contrasenia: 'hola123', autorizado: true, TCPersonaId: 1 } usuario
    * @example
    * create({
      nickname: 'pepito',
      contrasenia: 'hola123',
      autorizado: true,
      TCPersonaId: 1
    })
    */
  async function create (usuario) {
    const result = await TCUsuarioModel.create(usuario)
    return result.toJSON()
  }
  /**
    *
    * @param { nickname: 'pepito'} usuario
    */
  function findByNickName (usuario) {
    const cond = {
      where:
      {
        nickname: usuario.nickname
      }
    }
    const result = TCUsuarioModel.findAll(cond)
    return result
  }

  /**
   *
   * @param { nickname: 'pepo'} usuario
   * @param {string} nickname
   * @returns {number} numero de filas cambiadas
   */
  async function update (usuario, nickname) {
    const cond = {
      where: {
        nickname: nickname
      }
    }

    const update = await TCUsuarioModel.update(usuario, cond)
    return update
  }

  /**
   * @returns {object} objeto con todos los usuarios encontrados
   */
  function findAll () {
    return TCUsuarioModel.findAll()
  }
  return {
    findById,
    create,
    findByNickName,
    update,
    findAll
  }
}
