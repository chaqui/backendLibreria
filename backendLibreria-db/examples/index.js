'use strict'

const db = require('../')

async function run () {
  const config = {
    database: process.env.DB_NAME || 'libreria_db',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  }
  const {
    tCAdministrador,
    TCCategoria,
    TCCliente,
    TCControl,
    TCMarca,
    TCPersona,
    TCProducto,
    TCProductoSucursal,
    TCProveedor,
    TCRepresentante,
    TCServicio,
    TCSucursal,
    TCUsuario,
    TCVendedor,
    TTCajaTienda,
    TTdescripcionVenta,
    TTegresos,
    TTenvioASucursal,
    TTingresos,
    TTproductoVendido,
    TTSaldoADeber,
    TTSaldoPagado,
    TTServicioVendido,
    TTVenta} = await db(config).catch(handleFatalError)
  
  const persona = await TCPersona.create({
    primerNombre: 'Lucas',
    segundoNombre: 'Benjamin',
    primerApellido: 'Paz',
    segundoApellido: 'cardona',
    telefono: ' 77605679',
    direccion: 'Ciudad'
  }).catch(handleFatalError)

  console.log('--persona--')
  console.log(persona)

  const personas = await TCPersona.findAll().catch(handleFatalError)
  console.log('--Personas--')
  console.log(personas)

  const personaId = await TCPersona.findById(1)

  console.log('--persona por id ---')
  console.log(personaId)
}
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
