'use strict'
/** @module backendLibreria/backendLibreria_db */

const setupDatabase = require ('./lib/db')

//importación de configuraciones de los modelos 
const setupTC_AdministradorModel  = require('./lib/TC_Administrador')
const setupTC_CategoriaModel  = require('./lib/TC_Categoria')
const setupTC_ClienteModel = require('./lib/TC_Cliente')
const setupTC_ControlModel = require('./lib/TC_Control')
const setupTC_MarcaModel = require('./lib/TC_Marca')
const setupTC_PersonaModel = require('./lib/TC_Persona')
const setupTC_ProductoModel = require('./lib/TC_Producto')
const setupTC_ProductoSucursalModel = require('./lib/TC_ProductoSucursal')
const setupTC_ProveedorModel = require('./lib/TC_Proveedor')
const setupTC_RepresentanteModel = require('./lib/TC_Representante')
const setupTC_ServicioModel = require('./lib/TC_Servicio')
const setupTC_SucursalModel = require('./lib/TC_Sucursal')
const setupTC_UsuarioModel = require('./lib/TC_Usuario')
const setupTC_VendedorModel = require('./lib/TC_Vendedor')
const setupTT_CajaTiendaModel = require('./lib/TT_CajaTienda')
const setupTT_descripcionVentaModel = require('./lib/TT_descripcionVenta')
const setupTT_egresosModel = require('./lib/TT_egresos')
const setupTT_envioASucursalModel = require('./lib/TT_envioASucursal')
const setupTT_ingresosModel = require('./lib/TT_ingresos')
const setupTT_productoVendidoModel = require('./lib/TT_productoVendido')
const setupTT_SaldoADeberModel = require('./lib/TT_SaldoADeber')
const setupTT_SaldoPagadoModel = require('./lib/TT_SaldoPagado')
const setupTT_ServicioVendidoModel = require('./lib/TT_ServicioVendido')
const setupTT_VentaModel = require('./lib/TT_Venta')

/* Modulo de exportación y configuración de backendLibreria 
 * @constructor
 * @param {config} config - configuracion de la base de datos 
 * @returns {array <objects>} - elementos de la base de datos 
 *                  
*/
module.exports = async function (config) {
  const sequelize = setupDatabase(config)

  //creación de las variables por modelos

  const TC_PersonaModel = setupTC_Persona(config)
  //Modelos de Usuario
  const TC_AdministradorModel = setupTC_Administrador(config)
  const TC_ControlModel = setupTC_Control(config)
  const TC_UsuarioModel =setupTC_Usuario(config)
  const TT_CajaTiendaModel = setupTT_CajaTienda(config)
  const TC_CategoriaModel = setupTC_Categoria(config)
  const TC_ClienteModel = setupTC_Cliente(config)
  const TC_MarcaModel = setupTC_Marca(config)
  const TC_ProductoModel = setupTC_Producto(config)
  const TC_ProductoSucursalModel = setupTC_ProductoSucursal(config)
  const TC_ProveedorModel = setupTC_Proveedor(config)
  const TC_RepresentanteModel = setupTC_Representante(config)
  const TC_ServicioModel =setupTC_Servicio(config)
  const TC_SucursalModel =setupTC_Sucursal(config)
  const TC_VendedorModel = setupTC_Vendedor(config)
  const TT_descripcionVentaModel = setupTT_descripcionVenta(config)
  const TT_egresosModel = setupTT_egresos(config)
  const TT_envioASucursalModel =setupTT_envioASucursal(config)
  const TT_ingresosModel = setupTT_ingresos(config)
  const TT_productoVendidoModel = setupTT_productoVendido(config)
  const TT_SaldoADeberModel = setupTT_SaldoADeber(config)
  const TT_SaldoPagadoModel = setupTT_SaldoPagado(config)
  const TT_ServicioVendidoModel = setupTT_ServicioVendido(config)
  const TT_VentaModel = setupTT_Venta(config)

  /**Creacion de relaciones */

  //Relaciones de TC_Persona
  TC_PersonaModel.hasMany(TC_UsuarioModel)
  TC_PersonaModel.hasMany(TC_ClienteModel)
  TC_PersonaModel.hasMany(TC_RepresentanteModel)
    
  //Relaciones de TC_Control
  TC_ControlModel.belongsTo(TC_Usuario)
  
  //Relaciones de TC_Administrador
  TC_AdministradorModel.belongsTo(TC_UsuarioModel)
  TC_AdministradorModel.hasMany(TT_CajaTiendaModel)

  //Relacuibes de TT_CajaTienda
  TT_CajaTiendaModel.belongsTo(TC_AdministradorModel)
  TT_CajaTiendaModel.belongsTo(TC_SucursalModel)

  //Relaciones de TC_Usuario
  TC_UsuarioModel.hasMany(TC_ControlModel)
  TC_UsuarioModel.hasMany(TC_AdministradorModel)
  TC_UsuarioModel.hasMany(TC_VendedorModel)
  TC_UsuarioModel.belongsTo(TC_PersonaModel)

  //Relaciones de TC_Vendedor 
  TC_VendedorModel.belongsTo(TC_UsuarioModel)
  TC_VendedorModel.belongsTo(TC_SucursalModel)
  TC_VendedorModel.hasMany(TT_VentaModel)

  //Relaciones de TC_Sucursal
  TC_SucursalModel.hasMany(TT_CajaTiendaModel)
  TC_SucursalModel.hasMany(TC_VendedorModel)
  TC_SucursalModel.hasMany(TT_VentaModel)
  TC_SucursalModel.hasMany(TC_ServicioModel)
  TC_SucursalModel.hasMany(TC_ProductoSucursalModel)
  TC_SucursalModel.hasMany(TT_envioASucursalModel,{foreignKey:"sucursalSaliente"})
  TC_SucursalModel.hasMany(TT_envioASucursalModel,{foreignKey:"sucursalEntrante"})

  //Relaciones de TT_envioSucursal
  TT_envioASucursalModel.belongsTo(TC_SucursalModel,{foreignKey:"sucursalSaliente"})
  TT_envioASucursalModel.belongsTo(TC_SucursalModel,{foreignKey:"sucursalEntrante"})
  TT_envioASucursalModel.belongsTo(TC_ProductoModel)

  //Relaciones de TC_Servicio
  TC_ServicioModel.belongsTo(TC_SucursalModel)
  TC_ServicioModel.hasMany(TT_ServicioVendidoModel)

  //Relaciones de TC_Cliente
  TC_ClienteModel.belongsTo(TC_PersonaModel)
  TC_ClienteModel.hasMany(TT_VentaModel)

  //Relaciones de TT_Venta
  TT_VentaModel.belongsTo(TC_ClienteModel)
  TT_VentaModel.belongsTo(TT_descripcionVentaModel)
  TT_VentaModel.belongsTo(TC_VendedorModel)
  TT_VentaModel.belongsTo(TC_SucursalModel)

  //Relaciones de TT_descripcion 
  TT_descripcionVentaModel.hasMany(TT_VentaModel)
  TT_descripcionVentaModel.hasMany(TT_ServicioVendidoModel)
  TT_descripcionVentaModel.hasMany(TT_productoVendidoModel)

  //Relaciones de TC_ServicioVendido
  TT_ServicioVendidoModel.belongsTo(TC_ServicioModel)
  TT_ServicioVendidoModel.belongsTo(TT_descripcionVentaModel)

  //Relaciones de TT_ProductoVendido
  TT_productoVendidoModel.belongsTo(TC_ProductoModel)
  TT_productoVendidoModel.belongsTo(TT_descripcionVentaModel)

  //Relaciones de TC_ProductoSucursal 
  TC_ProductoSucursalModel.belongsTo(TC_SucursalModel)
  TC_ProductoSucursalModel.belongsTo(TC_ProductoModel)
  TC_ProductoSucursalModel.hasMany(TT_productoVendidoModel)
  TC_ProductoSucursalModel.hasMany(TT_egresosModel)
  TC_ProductoSucursalModel.hasMany (TT_ingresosModel)

  //Relaciones de TC_Producto
  TC_ProductoModel.hasMany(TT_envioASucursalModel)
  TC_ProductoModel.hasMany(TC_ProductoSucursalModel)
  TC_ProductoModel.belongsTo(TC_MarcaModel)
  TC_ProductoModel.belongsTo(TC_CategoriaModel)

  //Relaciones de TC_Categorias
  TC_CategoriaModel.hasMany(TC_ProductoModel)

  //Relaciones de TC_Marca
  TC_MarcaModel.hasMany(TC_ProductoModel)
  TC_MarcaModel.belongsTo(TC_ProveedorModel)

  //Relaciones de TT_egresos
  TT_egresosModel.belongsTo(TC_ProductoSucursalModel)

  //Relaciones de TT_ingresos
  TT_ingresosModel.belongsTo(TC_ProductoSucursal)

  //Relaciones de los TC_Proveedores 
  TC_ProveedorModel.hasMany(TC_MarcaModel)
  TC_ProveedorModel.hasMany(TT_SaldoADeberModel)
  TC_ProveedorModel.hasMany(TT_SaldoPagadoModel)
  TC_ProveedorModel.belongsTo(TC_RepresentanteModel)

  //Relaciones de TT_SaldoADeber
  TT_SaldoADeberModel.belongsTo(TC_ProveedorModel)

  //Relaciones de TT_SaldoPagado
  TT_SaldoPagadoModel.belongsTo(TC_ProveedorModel)

  //Relaciones de TC_representante
  TC_RepresentanteModel.hasMany(TC_ProveedorModel)
  TC_RepresentanteModel.hasMany(TC_PersonaModel)

  TC_Administrador={}
  TC_Categoria={}
  TC_Cliente={}
  TC_Control={}
  TC_Marca={}
  TC_Persona={}
  TC_Marca={}
  TC_Producto={}
  TC_ProductoSucursal={}
  TC_Proveedor={}
  TC_Representante={}
  TC_Servicio={}
  TC_Sucursal={}
  TC_Usuario={}
  TC_Vendedor={}
  TT_CajaTienda={}
  TT_descripcionVenta={}
  TT_egresos={}
  TT_envioASucursal={}
  TT_ingresos={}
  TT_productoVendido={}
  TT_SaldoADeber={}
  TT_SaldoPagado={}
  TT_ServicioVendido={}
  TT_Venta={}


  //elementos abiertos del modelo
  return {
    TC_Administrador,
    TC_Categoria,
    TC_Cliente,
    TC_Control,
    TC_Marca,
    TC_Persona,
    TC_Marca,
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
