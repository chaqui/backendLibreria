'use strict'
const test = require('ava')
const sinon = require('sinon')
const proxyrequire = require('proxyquire')


let config = {
  logging: function () {}
}

let db = null


test.beforeEach(async () => {
  const setupDatabase = require('..')
  db = await setupDatabase(config)
})

test('descripcion Venta', t => {
  t.truthy(db.TTdescripcionVenta, 'descripcion Venta service should exist')
})
