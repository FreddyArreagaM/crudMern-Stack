//Importamos el paquete de React
import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios';

//Declaramos el cuerpo del componente como si fuera una función
function AddUser(){

    //Hooks de react (permiten acceder y facilitar la declaración de las variables que se utilizan dentro del componente)
    //Se declara dentro de corchetes el nombre de la variable seguido de una ',' y el metodo setVariable para poder cambiar su estado 
    //A continuación la función base useState('') con comillas simples para inicializar la variable respectiva
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    //Metodo Agregar Usuario
    function agregarUsuario(){
        const data = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniquid()
        }
        //console.log(data)
    
        //Usamos axios para hacer envios http
        axios.post("/api/usuario/addUser", data).then((response) => {
            //console.log(response.status, response.data);
            window.location.href = "/";
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='mt-4'> Agregar un nuevo Usuario</h1>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    {/* Nombre de Usuario*/}
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese su nombre" autoComplete="nuevoNombre" value={nombre}
                                        onChange={(e) => { const newValue = e.target.value.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/g, ""); setNombre(newValue); }}
                        />
                    </div>

                    {/* Email de Usuario*/}
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' placeholder='Ingrese su email' autoComplete='nuevoEmail'
                                                                        value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    
                    {/* Nombre de Usuario*/}
                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>Teléfono</label>
                        <input type="text" className="form-control" placeholder="Ingrese su teléfono" autoComplete="nuevoTelefono" maxLength={10}
                                value={telefono} onChange={(e) => { const newValue = e.target.value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1");
                                    if (newValue.length <= 10) {
                                        setTelefono(newValue);
                                    }
                                }} 
                        />
                    </div>

                    {/* Button Agregar Usuario*/}
                    <button onClick={agregarUsuario} className='btn btn-success'> Guardar Usuario </button>
                </div>
            </div>
        </div>
    )
}

//Exportamos el componente para poder ser utilizado e invocado en el App.js principla
export default AddUser;