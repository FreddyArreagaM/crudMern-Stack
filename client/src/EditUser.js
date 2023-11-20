//Importamos el paquete de React
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

//Declaramos el cuerpo del componente como si fuera una función
function EditUser(){

    //Creamos una constante para obtener el user enviado por ruta
    const params = useParams()

    //Hooks de react
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(()=>{
        axios.post("/api/usuario/getdataUser", {idusuario: params.idusuario}).then( res=>{
            //console.log(res.data[0])
            const datausuario = res.data[0];
            setNombre(datausuario.nombre);
            setEmail(datausuario.email);
            setTelefono(datausuario.telefono);
        }).catch(err=>{
            console.log(err)
        });
    }, [params.idusuario])

    //Funcion para editar usuario
    function editarUsuario(){
        //Nuevo objeto para actualizar el usuario
        const updateuser = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }

        //Usamos axios para hacer envios http
        axios.post("/api/usuario/updateUser", updateuser).then((response) => {
            //console.log(response.status, response.data);
            window.location.href = "/";
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='mt-4'> Editar Usuario</h1>
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
                    <button onClick={editarUsuario} className='btn btn-success'> Editar Usuario </button>
                </div>
            </div>
        </div>
    )
}

//Exportamos el componente para poder ser utilizado e invocado en el App.js principla
export default EditUser;