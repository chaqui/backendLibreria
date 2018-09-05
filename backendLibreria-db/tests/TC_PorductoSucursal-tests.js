'use strict'
const test = require('ava')
const sinon = require('sinon')
const proxyrequire = require('proxyquire')


let config = {
  logging: function () {}
}

let db = null


test.beforeEach(async () => {
  const setupDatabase = require('../')
  db = await setupDatabase(config)
})

test('Producto Sucursal', t => {
  t.truthy(db.TC_ProductoSucursal, 'Producto Sucursal service should exist')
})
