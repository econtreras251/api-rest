const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/shop', (err,res)=>{
  if(err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexion a la base de datos establecida...')

  app.listen(port, ()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
  })
})
