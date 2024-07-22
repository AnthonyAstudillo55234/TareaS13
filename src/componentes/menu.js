import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import logo from './img/logo.png';

const Menu = () => {
  return (
    <div class='menu_inicio'>
      <div class='presentacion'>
        <img src={logo} alt="Logo" />
        <p class='nombre'>EcuaGizer<br></br></p>
      </div>
        <div class='opciones'>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/login'>Iniciar Sesión</Link></li>
            <li><Link to='/registrar'>Registrarse</Link></li>
          </ul>
          
        </div>
    </div>
  );
};

export default Menu;
