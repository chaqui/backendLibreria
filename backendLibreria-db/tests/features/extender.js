'use strict'
module.exports = function extender (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}