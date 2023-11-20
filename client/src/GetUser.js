//Importamos el paquete de React
import React from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';

//Declaramos el cuerpo del componente como si fuera una función
function GetUser({usuario}){

    function borrarUsuario(idusuario){
        axios.post("/api/usuario/deleteUser", {idusuario: idusuario})
        .then( res=>{
            //console.log(res.data)
        }).catch(err=>{
            console.log(err)
        });
        window.location.href = "/";
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>
                    
                    <Link to={`/editarUsuario/${usuario.idusuario}`}>
                        <li className='btn btn-success mt-2'> Editar</li>    
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <button className='btn btn-danger mt-2' onClick={()=>{borrarUsuario(usuario.idusuario)}}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )

}

//Exportamos el componente para poder ser utilizado e invocado en el App.js principla
export default GetUser;