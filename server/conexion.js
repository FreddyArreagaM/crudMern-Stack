const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://satorug:satorug@atlascluster.zfx1xtj.mongodb.net/');

//Creamos el objeto que instancia la conexion a la base de datos
const objetobd = mongoose.connection

//Usamos el objeto para validar si la conexión fue un éxito( si se encuentra connected - viene a ser como un estado que se obtien de la instancia cuando se ejecuta connection).
objetobd.on('connected', ()=> {console.log('Conexión correcta a Mongo DB')})

//Usamos el objeto para validar si exisitó un error y presentamos el mensaje respectivo(error - viene a ser como un estado que se obtien de la instancia cuando se ejecuta connection)
objetobd.on('error', ()=> {console.log('Error en la conexión a Mongo DB')})

//Exportamos para poder usarlo en el server
module.exports = mongoose