'use strict'
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
module.exports = function setupProdducto (TCProductoModel) {
  function findById (id) {
    const result = TCProductoModel.findById(id)
    return result.toJSON
  }
  // @params prodducto

  async function create (prodducto) {
    const result = await TCProductoModel.create(prodducto)
    return result.toJSON()
  }
  /**
   *
   * @param {string} nombre nombre del producto
   */
  function findByNombre (nombre) {
    const cond = {
      where:
      {
        nombre: {
          [Op.like]: '%' + nombre + '%'
        }
      }
    }
    const result = TCProductoModel.findOne(cond)
    return result
  }

  /**
   * 
   * @param {*} idMarca 
   */
  function findByMarca (idMarca) {
    const cond = {
      where:
      {
        TC_Marca_idTC_Marca: idMarca
      }
    }
    const result = TCProductoModel.find(cond)
    return result
  }

  function findByCategoria (idCategoria) {
    const cond = {
      where:
      {
        TC_Categoria_idTC_Categoria: idCategoria
      }
    }
    const result = TCProductoModel.find(cond)
    return result
  }

  async function update (producto) {
    const cond = {
      where: {
        id: producto.id
      }
    }

    const update = await TCProductoModel.update(producto, cond)
    return update
  }

  function findAll () {
    return TCProductoModel.findAll()
  }

  return {
    findByMarca,
    findByCategoria,
    findById,
    create,
    findByNombre,
    update,
    findAll
  }
}
