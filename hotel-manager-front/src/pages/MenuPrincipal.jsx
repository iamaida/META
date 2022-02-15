import { React, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie/es6';
import NavbarMenuPrincipal from '../components/NavbarMenuPrincipal';


export default function MenuPrincipal() {

  const cookies = new Cookies();

  //Se usa useEffect para permitir que la función se siga ejecutando, en este caso, la funcion que hace
  //que persista la ventana de menu principal en caso de que se mantenga la sesión
  useEffect(() => {
    componentDidMount()
  }, [cookies]);


  //Elimina el token de las cookies para dejar de mantener el inicio de sesión
  const cerrarSesion = () => {
    cookies.remove('token', {path:'/'});
    window.location.assign('./');
  }
  
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
      Menu Principal
      <br />
      <Button  variant="link" type="submit" onClick={()=>cerrarSesion()}>
        Cerrar sesión
      </Button>
    </div>



  );
}
