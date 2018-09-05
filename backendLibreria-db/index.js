'use strict'
/** @module backendmodelsreria/backendmodelsreria_db */

const setupDatabase = require('./lib/db')

// importación de configuraciones de los modelos
const setuptC_AdministradorModel = require('./models/TC_Administrador')
const setuptC_CategoriaModel = require('./models/TC_Categoria')
const setuptC_ClienteModel = require('./models/TC_Cliente')
const setuptC_ControlModel = require('./models/TC_Control')
const setuptC_MarcaModel = require('./models/TC_Marca')
const setuptC_PersonaModel = require('./models/TC_Persona')
const setuptC_ProductoModel = require('./models/TC_Producto')
const setuptC_ProductoSucursalModel = require('./models/TC_ProductoSucursal')
const setuptC_ProveedorModel = require('./models/TC_Proveedor')
const setuptC_RepresentanteModel = require('./models/TC_Representante')
const setuptC_ServicioModel = require('./models/TC_Servicio')
const setuptC_SucursalModel = require('./models/TC_Sucursal')
const setuptC_UsuarioModel = require('./models/TC_Usuario')
const setuptC_VendedorModel = require('./models/TC_Vendedor')
const setuptT_CajaTiendaModel = require('./models/TT_CajaTienda')
const setuptT_descripcionVentaModel = require('./models/TT_descripcionVenta')
const setuptT_egresosModel = require('./models/TT_egresos')
const setuptT_envioASucursalModel = require('./models/TT_envioASucursal')
const setuptT_ingresosModel = require('./models/TT_ingresos')
const setuptT_productoVendidoModel = require('./models/TT_productoVendido')
const setuptT_SaldoADeberModel = require('./models/TT_SaldoADeber')
const setuptT_SaldoPagadoModel = require('./models/TT_SaldoPagado')
const setuptT_ServicioVendidoModel = require('./models/TT_ServicioVendido')
const setuptT_VentaModel = require('./models/TT_Venta')

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

  const tC_PersonaModel = setuptC_PersonaModel(config)
  // Modelos de Usuario
  const tC_AdministradorModel = setuptC_AdministradorModel(config)
  const tC_ControlModel = setuptC_ControlModel(config)
  const tC_UsuarioModel = setuptC_UsuarioModel(config)
  const tT_CajaTiendaModel = setuptT_CajaTiendaModel(config)
  const tC_CategoriaModel = setuptC_CategoriaModel(config)
  const tC_ClienteModel = setuptC_ClienteModel(config)
  const tC_MarcaModel = setuptC_MarcaModel(config)
  const tC_ProductoModel = setuptC_ProductoModel(config)
  const tC_ProductoSucursalModel = setuptC_ProductoSucursalModel(config)
  const tC_ProveedorModel = setuptC_ProveedorModel(config)
  const tC_RepresentanteModel = setuptC_RepresentanteModel(config)
  const tC_ServicioModel = setuptC_ServicioModel(config)
  const tC_SucursalModel = setuptC_SucursalModel(config)
  const tC_VendedorModel = setuptC_VendedorModel(config)
  const tT_descripcionVentaModel = setuptT_descripcionVentaModel(config)
  const tT_egresosModel = setuptT_egresosModel(config)
  const tT_envioASucursalModel = setuptT_envioASucursalModel(config)
  const tT_ingresosModel = setuptT_ingresosModel(config)
  const tT_productoVendidoModel = setuptT_productoVendidoModel(config)
  const tT_SaldoADeberModel = setuptT_SaldoADeberModel(config)
  const tT_SaldoPagadoModel = setuptT_SaldoPagadoModel(config)
  const tT_ServicioVendidoModel = setuptT_ServicioVendidoModel(config)
  const tT_VentaModel = setuptT_VentaModel(config)

  /** Creacion de relaciones */

  // Relaciones de TC_Persona
  tC_PersonaModel.hasMany(tC_UsuarioModel)
  tC_PersonaModel.hasMany(tC_ClienteModel)
  tC_PersonaModel.hasMany(tC_RepresentanteModel)

  // Relaciones de TC_Control
  tC_ControlModel.belongsTo(tC_UsuarioModel)

  // Relaciones de tCAdministrador
  tC_AdministradorModel.belongsTo(tC_UsuarioModel)
  tC_AdministradorModel.hasMany(tT_CajaTiendaModel)

  // Relacuibes de TT_CajaTienda
  tT_CajaTiendaModel.belongsTo(tC_AdministradorModel)
  tT_CajaTiendaModel.belongsTo(tC_SucursalModel)

  // Relaciones de TC_Usuario
  tC_UsuarioModel.hasMany(tC_ControlModel)
  tC_UsuarioModel.hasMany(tC_AdministradorModel)
  tC_UsuarioModel.hasMany(tC_VendedorModel)
  tC_UsuarioModel.belongsTo(tC_PersonaModel)

  // Relaciones de TC_Vendedor
  tC_VendedorModel.belongsTo(tC_UsuarioModel)
  tC_VendedorModel.belongsTo(tC_SucursalModel)
  tC_VendedorModel.hasMany(tT_VentaModel)

  // Relaciones de TC_Sucursal
  tC_SucursalModel.hasMany(tT_CajaTiendaModel)
  tC_SucursalModel.hasMany(tC_VendedorModel)
  tC_SucursalModel.hasMany(tT_VentaModel)
  tC_SucursalModel.hasMany(tC_ServicioModel)
  tC_SucursalModel.hasMany(tC_ProductoSucursalModel)
  tC_SucursalModel.hasMany(tT_envioASucursalModel, {foreignKey: 'sucursalSaliente'})
  tC_SucursalModel.hasMany(tT_envioASucursalModel, {foreignKey: 'sucursalEntrante'})

  // Relaciones de TT_envioSucursal
  tT_envioASucursalModel.belongsTo(tC_SucursalModel, {foreignKey: 'sucursalSaliente'})
  tT_envioASucursalModel.belongsTo(tC_SucursalModel, {foreignKey: 'sucursalEntrante'})
  tT_envioASucursalModel.belongsTo(tC_ProductoModel)

  // Relaciones de TC_Servicio
  tC_ServicioModel.belongsTo(tC_SucursalModel)
  tC_ServicioModel.hasMany(tT_ServicioVendidoModel)

  // Relaciones de TC_Cliente
  tC_ClienteModel.belongsTo(tC_PersonaModel)
  tC_ClienteModel.hasMany(tT_VentaModel)

  // Relaciones de TT_Venta
  tT_VentaModel.belongsTo(tC_ClienteModel)
  tT_VentaModel.belongsTo(tT_descripcionVentaModel)
  tT_VentaModel.belongsTo(tC_VendedorModel)
  tT_VentaModel.belongsTo(tC_SucursalModel)

  // Relaciones de TT_descripcion
  tT_descripcionVentaModel.hasMany(tT_VentaModel)
  tT_descripcionVentaModel.hasMany(tT_ServicioVendidoModel)
  tT_descripcionVentaModel.hasMany(tT_productoVendidoModel)

  // Relaciones de TC_ServicioVendido
  tT_ServicioVendidoModel.belongsTo(tC_ServicioModel)
  tT_ServicioVendidoModel.belongsTo(tT_descripcionVentaModel)

  // Relaciones de TT_ProductoVendido
  tT_productoVendidoModel.belongsTo(tC_ProductoModel)
  tT_productoVendidoModel.belongsTo(tT_descripcionVentaModel)

  // Relaciones de TC_ProductoSucursal
  tC_ProductoSucursalModel.belongsTo(tC_SucursalModel)
  tC_ProductoSucursalModel.belongsTo(tC_ProductoModel)
  tC_ProductoSucursalModel.hasMany(tT_productoVendidoModel)
  tC_ProductoSucursalModel.hasMany(tT_egresosModel)
  tC_ProductoSucursalModel.hasMany(tT_ingresosModel)

  // Relaciones de TC_Producto
  tC_ProductoModel.hasMany(tT_envioASucursalModel)
  tC_ProductoModel.hasMany(tC_ProductoSucursalModel)
  tC_ProductoModel.belongsTo(tC_MarcaModel)
  tC_ProductoModel.belongsTo(tC_CategoriaModel)

  // Relaciones de TC_Categorias
  tC_CategoriaModel.hasMany(tC_ProductoModel)

  // Relaciones de TC_Marca
  tC_MarcaModel.hasMany(tC_ProductoModel)
  tC_MarcaModel.belongsTo(tC_ProveedorModel)

  // Relaciones de TT_egresos
  tT_egresosModel.belongsTo(tC_ProductoSucursalModel)

  // Relaciones de TT_ingresos
  tT_ingresosModel.belongsTo(tC_ProductoSucursalModel)

  // Relaciones de los TC_Proveedores
  tC_ProveedorModel.hasMany(tC_MarcaModel)
  tC_ProveedorModel.hasMany(tT_SaldoADeberModel)
  tC_ProveedorModel.hasMany(tT_SaldoPagadoModel)
  tC_ProveedorModel.belongsTo(tC_RepresentanteModel)

  // Relaciones de TT_SaldoADeber
  tT_SaldoADeberModel.belongsTo(tC_ProveedorModel)

  // Relaciones de TT_SaldoPagado
  tT_SaldoPagadoModel.belongsTo(tC_ProveedorModel)

  // Relaciones de TC_representante
  tC_RepresentanteModel.hasMany(tC_ProveedorModel)
  tC_RepresentanteModel.belongsTo(tC_PersonaModel)

  const tCAdministrador = {}
  const TC_Categoria = {}
  const TC_Cliente = {}
  const TC_Control = {}
  const TC_Marca = {}
  const TC_Persona = {}
  const TC_Producto = {}
  const TC_ProductoSucursal = {}
  const TC_Proveedor = {}
  const TC_Representante = {}
  const TC_Servicio = {}
  const TC_Sucursal = {}
  const TC_Usuario = {}
  const TC_Vendedor = {}
  const TT_CajaTienda = {}
  const TT_descripcionVenta = {}
  const TT_egresos = {}
  const TT_envioASucursal = {}
  const TT_ingresos = {}
  const TT_productoVendido = {}
  const TT_SaldoADeber = {}
  const TT_SaldoPagado = {}
  const TT_ServicioVendido = {}
  const TT_Venta = {}

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({force: true})
  }

  // elementos abiertos del modelo
  return {
    tCAdministrador,
    TC_Categoria,
    TC_Cliente,
    TC_Control,
    TC_Marca,
    TC_Persona,
    TC_Producto,
    TC_ProductoSucursal,
    TC_Proveedor,
    TC_Representante,
    TC_Servicio,
    TC_Sucursal,
    TC_Usuario,
    TC_Vendedor,
    TT_CajaTienda,
    TT_descripcionVenta,
    TT_egresos,
    TT_envioASucursal,
    TT_ingresos,
    TT_productoVendido,
    TT_SaldoADeber,
    TT_SaldoPagado,
    TT_ServicioVendido,
    TT_Venta
  }
}
