'use strict'
/** @module backendmodelsreria/backendmodelsreriadb */

const setupDatabase = require('./lib/db')

// importación de configuraciones de los modelos
const setuptCAdministradorModel = require('./models/TC_Administrador')
const setuptCCategoriaModel = require('./models/TC_Categoria')
const setuptCClienteModel = require('./models/TC_Cliente')
const setuptCControlModel = require('./models/TC_Control')
const setuptCMarcaModel = require('./models/TC_Marca')
const setuptCPersonaModel = require('./models/TC_Persona')
const setuptCProductoModel = require('./models/TC_Producto')
const setuptCProductoSucursalModel = require('./models/TC_ProductoSucursal')
const setuptCProveedorModel = require('./models/TC_Proveedor')
const setuptCRepresentanteModel = require('./models/TC_Representante')
const setuptCServicioModel = require('./models/TC_Servicio')
const setuptCSucursalModel = require('./models/TC_Sucursal')
const setuptCUsuarioModel = require('./models/TC_Usuario')
const setuptCVendedorModel = require('./models/TC_Vendedor')
const setuptTCajaTiendaModel = require('./models/TT_CajaTienda')
const setuptTdescripcionVentaModel = require('./models/TT_descripcionVenta')
const setuptTegresosModel = require('./models/TT_egresos')
const setuptTenvioASucursalModel = require('./models/TT_envioASucursal')
const setuptTingresosModel = require('./models/TT_ingresos')
const setuptTproductoVendidoModel = require('./models/TT_productoVendido')
const setuptTSaldoADeberModel = require('./models/TT_SaldoADeber')
const setuptTSaldoPagadoModel = require('./models/TT_SaldoPagado')
const setuptTServicioVendidoModel = require('./models/TT_ServicioVendido')
const setuptTVentaModel = require('./models/TT_Venta')

const defaults = require('defaults')

/* Modulo de exportación y configuración de backendmodelsreria
 * @constructor
 * @param {config} config - configuracion de la base de datos
 * @returns {array <objects>} - elementos de la base de datos
 *
*/
module.exports = async function (config) {
  // configuración default para pruebas
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  }
  )

  const sequelize = setupDatabase(config)

  // creación de las variables por modelos

  const tCPersonaModel = setuptCPersonaModel(config)
  // Modelos de Usuario
  const tCAdministradorModel = setuptCAdministradorModel(config)
  const tCControlModel = setuptCControlModel(config)
  const tCUsuarioModel = setuptCUsuarioModel(config)
  const tTCajaTiendaModel = setuptTCajaTiendaModel(config)
  const tCCategoriaModel = setuptCCategoriaModel(config)
  const tCClienteModel = setuptCClienteModel(config)
  const tCMarcaModel = setuptCMarcaModel(config)
  const tCProductoModel = setuptCProductoModel(config)
  const tCProductoSucursalModel = setuptCProductoSucursalModel(config)
  const tCProveedorModel = setuptCProveedorModel(config)
  const tCRepresentanteModel = setuptCRepresentanteModel(config)
  const tCServicioModel = setuptCServicioModel(config)
  const tCSucursalModel = setuptCSucursalModel(config)
  const tCVendedorModel = setuptCVendedorModel(config)
  const tTdescripcionVentaModel = setuptTdescripcionVentaModel(config)
  const tTegresosModel = setuptTegresosModel(config)
  const tTenvioASucursalModel = setuptTenvioASucursalModel(config)
  const tTingresosModel = setuptTingresosModel(config)
  const tTproductoVendidoModel = setuptTproductoVendidoModel(config)
  const tTSaldoADeberModel = setuptTSaldoADeberModel(config)
  const tTSaldoPagadoModel = setuptTSaldoPagadoModel(config)
  const tTServicioVendidoModel = setuptTServicioVendidoModel(config)
  const tTVentaModel = setuptTVentaModel(config)

  /** Creacion de relaciones */

  // Relaciones de TCPersona
  tCPersonaModel.hasMany(tCUsuarioModel)
  tCPersonaModel.hasMany(tCClienteModel)
  tCPersonaModel.hasMany(tCRepresentanteModel)

  // Relaciones de TCControl
  tCControlModel.belongsTo(tCUsuarioModel)

  // Relaciones de tCAdministrador
  tCAdministradorModel.belongsTo(tCUsuarioModel)
  tCAdministradorModel.hasMany(tTCajaTiendaModel)

  // Relacuibes de TTCajaTienda
  tTCajaTiendaModel.belongsTo(tCAdministradorModel)
  tTCajaTiendaModel.belongsTo(tCSucursalModel)

  // Relaciones de TCUsuario
  tCUsuarioModel.hasMany(tCControlModel)
  tCUsuarioModel.hasMany(tCAdministradorModel)
  tCUsuarioModel.hasMany(tCVendedorModel)
  tCUsuarioModel.belongsTo(tCPersonaModel)

  // Relaciones de TCVendedor
  tCVendedorModel.belongsTo(tCUsuarioModel)
  tCVendedorModel.belongsTo(tCSucursalModel)
  tCVendedorModel.hasMany(tTVentaModel)

  // Relaciones de TCSucursal
  tCSucursalModel.hasMany(tTCajaTiendaModel)
  tCSucursalModel.hasMany(tCVendedorModel)
  tCSucursalModel.hasMany(tTVentaModel)
  tCSucursalModel.hasMany(tCServicioModel)
  tCSucursalModel.hasMany(tCProductoSucursalModel)
  tCSucursalModel.hasMany(tTenvioASucursalModel, {foreignKey: 'sucursalSaliente'})
  tCSucursalModel.hasMany(tTenvioASucursalModel, {foreignKey: 'sucursalEntrante'})

  // Relaciones de TTenvioSucursal
  tTenvioASucursalModel.belongsTo(tCSucursalModel, {foreignKey: 'sucursalSaliente'})
  tTenvioASucursalModel.belongsTo(tCSucursalModel, {foreignKey: 'sucursalEntrante'})
  tTenvioASucursalModel.belongsTo(tCProductoModel)

  // Relaciones de TCServicio
  tCServicioModel.belongsTo(tCSucursalModel)
  tCServicioModel.hasMany(tTServicioVendidoModel)

  // Relaciones de TCCliente
  tCClienteModel.belongsTo(tCPersonaModel)
  tCClienteModel.hasMany(tTVentaModel)

  // Relaciones de TTVenta
  tTVentaModel.belongsTo(tCClienteModel)
  tTVentaModel.belongsTo(tTdescripcionVentaModel)
  tTVentaModel.belongsTo(tCVendedorModel)
  tTVentaModel.belongsTo(tCSucursalModel)

  // Relaciones de TTdescripcion
  tTdescripcionVentaModel.hasMany(tTVentaModel)
  tTdescripcionVentaModel.hasMany(tTServicioVendidoModel)
  tTdescripcionVentaModel.hasMany(tTproductoVendidoModel)

  // Relaciones de TCServicioVendido
  tTServicioVendidoModel.belongsTo(tCServicioModel)
  tTServicioVendidoModel.belongsTo(tTdescripcionVentaModel)

  // Relaciones de TTProductoVendido
  tTproductoVendidoModel.belongsTo(tCProductoModel)
  tTproductoVendidoModel.belongsTo(tTdescripcionVentaModel)

  // Relaciones de TCProductoSucursal
  tCProductoSucursalModel.belongsTo(tCSucursalModel)
  tCProductoSucursalModel.belongsTo(tCProductoModel)
  tCProductoSucursalModel.hasMany(tTproductoVendidoModel)
  tCProductoSucursalModel.hasMany(tTegresosModel)
  tCProductoSucursalModel.hasMany(tTingresosModel)

  // Relaciones de TCProducto
  tCProductoModel.hasMany(tTenvioASucursalModel)
  tCProductoModel.hasMany(tCProductoSucursalModel)
  tCProductoModel.belongsTo(tCMarcaModel)
  tCProductoModel.belongsTo(tCCategoriaModel)

  // Relaciones de TCCategorias
  tCCategoriaModel.hasMany(tCProductoModel)

  // Relaciones de TCMarca
  tCMarcaModel.hasMany(tCProductoModel)
  tCMarcaModel.belongsTo(tCProveedorModel)

  // Relaciones de TTegresos
  tTegresosModel.belongsTo(tCProductoSucursalModel)

  // Relaciones de TTingresos
  tTingresosModel.belongsTo(tCProductoSucursalModel)

  // Relaciones de los TCProveedores
  tCProveedorModel.hasMany(tCMarcaModel)
  tCProveedorModel.hasMany(tTSaldoADeberModel)
  tCProveedorModel.hasMany(tTSaldoPagadoModel)
  tCProveedorModel.belongsTo(tCRepresentanteModel)

  // Relaciones de TTSaldoADeber
  tTSaldoADeberModel.belongsTo(tCProveedorModel)

  // Relaciones de TTSaldoPagado
  tTSaldoPagadoModel.belongsTo(tCProveedorModel)

  // Relaciones de TCrepresentante
  tCRepresentanteModel.hasMany(tCProveedorModel)
  tCRepresentanteModel.belongsTo(tCPersonaModel)

  const tCAdministrador = {}
  const TCCategoria = {}
  const TCCliente = {}
  const TCControl = {}
  const TCMarca = {}
  const TCPersona = {}
  const TCProducto = {}
  const TCProductoSucursal = {}
  const TCProveedor = {}
  const TCRepresentante = {}
  const TCServicio = {}
  const TCSucursal = {}
  const TCUsuario = {}
  const TCVendedor = {}
  const TTCajaTienda = {}
  const TTdescripcionVenta = {}
  const TTegresos = {}
  const TTenvioASucursal = {}
  const TTingresos = {}
  const TTproductoVendido = {}
  const TTSaldoADeber = {}
  const TTSaldoPagado = {}
  const TTServicioVendido = {}
  const TTVenta = {}

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({force: true})
  }

  // elementos abiertos del modelo
  return {
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
    TTVenta
  }
}
