import { React, useEffect } from 'react';
import Cookies from 'universal-cookie/es6';
import NavbarMenuPrincipal from '../components/NavbarMenuPrincipal';
import CardsMenuPrincipal from '../components/CardsMenuPrincipal';
import Footer from '../components/Footer';
import '../styles/menuPrincipal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshake} from '@fortawesome/free-solid-svg-icons';


export default function MenuPrincipal() {

  const cookies = new Cookies();

  //Se usa useEffect para permitir que la función se siga ejecutando, en este caso, la funcion que hace
  //que persista la ventana de menu principal en caso de que se mantenga la sesión
  useEffect(() => {
    componentDidMount()
  }, [cookies]);

  
  //En caso de que no retorne el token, quiere decir que no esta iniciada la sesión, por lo que es necesario
  //que se siga redirigiendo a la página de inicio de sesión.
  const componentDidMount =() =>{
    if(!cookies.get('token')){
        window.location.assign('./');
    }
  }

  console.log('token: '+cookies.get('token'));
  return (
    <div>

      <NavbarMenuPrincipal />
      <h1 className='titulo-menu'>
        <FontAwesomeIcon icon={faHandshake} />
        &nbsp;¡Bienvenido a Hotel Manager!
        </h1>
      <CardsMenuPrincipal />
      <Footer />

    </div>



  );
}
