#backendlibreria-db 

##usage
```js
const setupDatabase = require('backendlibreria-db')

setupDatabase(config).then(db=>{
    const{    TC_Administrador,
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
    TT_Venta}=db
}).catch(error=>console.error(error))

```