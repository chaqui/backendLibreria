'use strict'

module.exports = function setupPersona (TCpersonaModel) {
  function findById (id) {
    return TCpersonaModel.findById(id)
  }
  function findOne(nombre){
    
  }

  return {
    findById
  }
}
