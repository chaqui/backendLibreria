'use strict'
const clonar = require('./extender')
const persona = {
  id: 1,
  primerNombre: 'Carlos',
  segundoNombre: 'Benjamin',
  primerApellido: 'Perez',
  segundoApellido: 'cardona',
  telefono: ' 77605678',
  direccion: 'Ciudad'
}
const personas = [
    persona,
    clonar(persona, { id: 2,
        segundoNombre: 'Humberto',
        primerApellido: 'Lopez',
        telefono: '54656554'}),
    clonar(persona, {id: 3,
        primerNombre: 'Aida',
        segundoNombre: 'Juana'},
    clonar(persona, {id: 4,
        primerNombre: 'Rene',
        segundoApellido: 'Fuentes',
        telefono: '4533456'
    })),
    clonar(persona, {id: 5,
        primerApellido: 'Paz',
        segundoApellido: 'Letona',
        telefono: '45678844'})
]
module.exports = {
    single: persona,
    all: personas,
    byPrimerNombre: nombre => personas.filter(a => a.primerNombre === nombre),
    byPrimerApellido: apeliido => personas.filter(a => a.primerApellido === apeliido),
    byId: id => personas.filter(a => a.id === id)
}
