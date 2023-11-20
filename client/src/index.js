import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Leemos del index.html con la función getElementById el div declarado para renderizarle el componente correspondiente App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);//Se renderiza dentro de React.StrictMode el nombre de app que se va a ejecutar primero. (Es como declarar el renderizado en Angular, solo que no es por componente)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
