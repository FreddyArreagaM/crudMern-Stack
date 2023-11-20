
{/* Declaramos una constante para instanciar express*/}
const express = require('express')
const app = express();

//Importamos la conexión mongoDB
const archivoBD= require('./conexion')

//Importamos el archivo de rutas y modelo usuario
const rutasUsuario = require('./rutas/usuario')

//Importar body parser sirve para obtener de los campos del front la información 
const bodyParser = require('body-parser')
app.use(bodyParser.json()) //Definimos en que formato lo vamos a utilizar
app.use(bodyParser.urlencoded({extended: 'true'})) //Se utiliza para declarar el poder utilizar la información de los formularios entrantes

//Hacemos una prueba en la ruta
app.use('/api/usuario', rutasUsuario)

//Realizamos la declaración de la primera ruta index para el servidor backend
app.get('/', (req, res) =>{
    res.end('Bienvenidos al servidor backend Node.js. Ejecutandose...')
})

//Configuramos el server con información básica
//Lo primero es que cuando se inicie funcione en el puerto 5000 y presente ese mensaje en la consola para indicar que todo está OK
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})