'use strict'
const test = require('ava')
const sinon = require('sinon')
const proxyrequire = require('proxyquire')
const stubs = require('./stubs')

let config = {
  logging: function () {}
}

let db = null
let tcPersonaStub = null
let sandbox = null
let tcProductoSub = {
  hasMany: function () {},
  belongsTo: function () {}
}
test.beforeEach(async () => {
  sandbox = sinon.sandbox.create()
  tcPersonaStub = {
    hasMany: sandbox.spy(),
    belongsTo: sandbox.spy()
  }

  const setupDatabase = proxyrequire('../', {
    './models/TC_Control': () => stubs.tcControlSub,
    './models/TC_Persona': () => tcPersonaStub,
    './models/TC_Producto': () => tcProductoSub,
    './models/TC_Usuario': () => stubs.tCUsuarioSub,
    './models/TC_Cliente': () => stubs.tCClienteSub,
    './models/TC_Representante': () => stubs.tCRepresentanteSub
  })
  db = await setupDatabase(config)
})

test.afterEach(t => {
  sandbox && sandbox.restore()
})

test('Persona', t => {
  t.truthy(db.TCPersona, 'Persona service should exist')
})
