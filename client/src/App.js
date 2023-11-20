import './App.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUsers from './ListUsers';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Crud Mern Stack</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"  href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Estructura para declarar el routing en React*/}
        <BrowserRouter>{/* Etiqueta mayor */}
          <Routes>{/* Etiquete mediana que engloba todas las rutas  */}
            <Route path= '/' element={<ListUsers/>} exact></Route> {/* Definición de ruta Lista de Usuarios, en este caso '/' es la ruta raiz*/}
            <Route path= '/agregarUsuario' element={<AddUser/>} exact></Route> {/* Definición de ruta Agregar Usuario, en este caso '/agregarUsuario' es la ruta para ese componente*/}
            <Route path= '/editarUsuario/:idusuario' element={<EditUser/>} exact></Route> {/* Definición de ruta Editar Usuario, en este caso '/editarUsuario' es la ruta para ese componente*/}
            <Route path='*' element={<Navigate to="/" />}/>  {/* Definimos esta declaratoria de ruta para cuando se escriba una ruta que no exista*/}
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
