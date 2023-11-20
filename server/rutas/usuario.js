//Modelo para la inserción de datos en MongoDB

//Instanciamos las extensiones necesarias
const express = require('express')
const router = express.Router()

//Invocamos mongoose
const mongoose = require('mongoose')
const schema = mongoose.Schema

//Definimos el modelo(Campos necesarios de información del Usuario)
const schemausuario = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

//Definimos un modelo y le asignamos directamente através del mongoose y se asigna el nombre para la tabla en este caso 'usuarios' y la data a guardar
const ModeloUsuario = mongoose.model('usuarios', schemausuario)
module.exports = router

//Ruta de prueba
router.get('/ejemplo', (req,res) =>{
    res.end('Saludo carga desde ruta ejemplo')
})


router.get('/hola', (req,res) =>{
    res.status(200).send('Hola mundo')
}) 

// NextJS front and back 

//Metodo post para agregar los datos del usuario en el front - ACTUALIZADO
router.post('/addUser', async (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })

    const savedUser = await nuevoUsuario.save();

    if (!savedUser) {
        res.send(err);
        //console.log('Error parse');
    } else {
        res.send('Usuario agregado correctamente');
    }
});

// Obtener todos los usuarios
router.get('/listUsers', async (req, res) => {
    try {
        const docs = await ModeloUsuario.find({}).exec();
        res.send(docs);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Obtener usuarios individualmente
router.post('/getdataUser', (req, res) => {
    ModeloUsuario.find({ idusuario: req.body.idusuario })
        .exec()
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            // Handle error
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

//Metodo post para actualizar los datos del usuario en el front - ACTUALIZADO
router.post('/updateUser', (req, res) => {
    ModeloUsuario.findOneAndUpdate({idusuario: req.body.idusuario},{
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
    }).exec()
    .then(docs => {
        res.send(docs);
    })
    .catch(err => {
        // Handle error
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

//Metodo post para eliminar Usuario
router.post('/deleteUser', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario: req.body.idusuario})
    .catch(err => {
        if(!err){
            alert('Usuario eliminado correctamente')
        }else{
            res.send(err)
        }
    });
});


