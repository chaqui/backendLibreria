'use strict'

module.exports = function setupControl (TCControlModel) {
  function findById (id) {
    const result = TCControlModel.findById(id)
    return result.toJSON
  }
  // @params control

  async function create (control) {
    const result = await TCControlModel.create(control)
    return result.toJSON()
  }

  function findByNombre (control) {
    const cond = {
      where:
      {
        primerNombre: control.primerNombre,
        segundoNombre: control.segundoNombre
      }
    }
    const result = TCControlModel.findOne(cond)
    return result.toJSON()
  }

  async function update (control) {
    const cond = {
      where: {
        id: control.id
      }
    }

    const update = await TCControlModel.update(control, cond)
    return update
  }

  return {
    findById,
    create,
    findByNombre,
    update
  }
}