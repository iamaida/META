import React, { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbarMenuPrincipal.css';
import Cookies from 'universal-cookie/es6';

export default function NavbarMenuPrincipal() {

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

  return( 
    <div>
      <Navbar className='navbar' variant='dark'>
        <Container>
          <Navbar.Brand href="./menuprincipal">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav>
            <img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" />
              <NavDropdown title="Nombre" id="basic-nav-dropdown" className='justify-content-end'>
                  <NavDropdown.Item className='dropdown-item'>
                    <Button  variant="light" type="submit" onClick={()=>cerrarSesion()}>
                      <FontAwesomeIcon icon={faSignOutAlt}/>
                      &nbsp; &nbsp;Cerrar Sesion
                    </Button>
                    
                  </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
    );
}
