#backendlibreria-db 

##usage
```js
const setupDatabase = require('backendlbreria-db')

setupDatabase(config).then(db=>{
    const{agent,Metric}=db
}).catch(error=>console.error(error))

```