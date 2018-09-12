#backendlibreria-db 

##usage
```js
const setupDatabase = require('backendlibreria-db')

setupDatabase(config).then(db=>{
    const{       tCAdministrador,
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
    TTVenta}=db
}).catch(error=>console.error(error))

```