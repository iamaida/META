import { React, useEffect } from 'react';
import Cookies from 'universal-cookie/es6';
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion'
import CardsMenuPrincipal from '../components/menu-principal/CardsMenuPrincipal';
import Footer from '../components/componentes-generales/Footer';
import '../styles/menu-principal/menuPrincipal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshake} from '@fortawesome/free-solid-svg-icons';


export default function MenuPrincipal() {

  

  //Se usa useEffect para permitir que la función se siga ejecutando, en este caso, la funcion que hace
  //que persista la ventana de menu principal en caso de que se mantenga la sesión
  useEffect(() => {
    const cookies = new Cookies();
    if(!cookies.get('token')){
      window.location.assign('./');
      console.log('token: '+cookies.get('token'));
  }
  }, []);


  
  return (
    <div className='menu-principal'>

      <BarraNavegacion />
      <h1 className='titulo-menu'>
        <FontAwesomeIcon icon={faHandshake} />
        &nbsp;¡Bienvenido a Hotel Manager!
        </h1>
      <CardsMenuPrincipal />
      <Footer />

    </div>



  );
}
