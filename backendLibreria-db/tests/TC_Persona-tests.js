'use strict'
const test = require('ava')
const sinon = require('sinon')
const proxyrequire = require('proxyquire')
const stubs = require('./stubs')

let config = {
  logging: function () {}
}

let db = null
let tcPersomaSub = null
let sandbox = null

test.beforeEach(async () => {
  sandbox = sinon.sandbox.create()
  tcPersomaSub = {
    hasMany: sandbox.spy(),
    belongsTo: sandbox.spy()
  }

  const setupDatabase = proxyrequire('../', {
  })
  db = await setupDatabase(config)
})

test.afterEach(t => {
  sandbox && sandbox.restore()
})

test('Persona', t => {
  t.truthy(db.TCPersona, 'Persona service should exist')
})
