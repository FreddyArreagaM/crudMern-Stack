//Importamos el paquete de React
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GetUser from './GetUser'

//Declaramos el cuerpo del componente como si fuera una función
function ListUsers(){

    const[dataUsuarios, setdataUsuarios] = useState([])

    useEffect(()=>{
        axios.get("/api/usuario/listUsers").then(res =>{
            //console.log(res.data)
            setdataUsuarios(res.data)
        }).catch(err=>{
            console.log(err)
        });
    }, [])

    //Mapeamos la lista de Usuarios en objeto usuario
    const listausuarios = dataUsuarios.map( usuario =>{
        return (
            <div className='mt-3' key={usuario.idusuario}>
                <GetUser usuario={usuario}></GetUser>
            </div>
        )
    })

    return (
        <div>
            <h1 className='mt-3'> Lista de Usuarios</h1>
            {/*Declaramos listausuarios para presentar los mismos*/}
            <hr></hr>
            {listausuarios}
        </div>
    )
}

//Exportamos el componente para poder ser utilizado e invocado en el App.js principla
export default ListUsers;