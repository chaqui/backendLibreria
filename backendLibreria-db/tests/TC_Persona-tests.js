'use strict'
const test = require('ava')
const sinon = require('sinon')
const proxyrequire = require('proxyquire')


let config = {
  logging: function () {}
}

let db = null


let tCPersonaSub = null

test.beforeEach(async () => {
  tCPersonaSub = {
    hasMany: function () {},
    belongsTo: function () {}
  }
  const setupDatabase = proxyrequire('../', {
    './models/TC_Usuario': () => tCUsuarioSub,
    './models/TC_Cliente': () => tCClienteSub,
    './models/TC_Representante': () => tCRepresentanteSub,
    './models/TC_Persona': () => tCPersonaSub
  })
  db = await setupDatabase(config)
})

test('Persona', t => {
  t.truthy(db.TC_Persona, 'Persona service should exist')
})
