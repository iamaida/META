import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
import ModuloUsuarios from './pages/ModuloUsuarios';
import ModalEliminarUsuario from './components/ModalEliminarUsuario';
import VerUsuario from './components/VerUsuario';
import Reserva from './components/Reserva';
import Consultas from './components/Consultas';
import Datos from './components/Datos';
import Prueba from './components/Prueba';


export function App() {
  return(

    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <InicioSesion /> }/>
          <Route exact path='/menuprincipal' element={ <MenuPrincipal/> } />
          <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        </Routes>
      <Routes>
        <Route exact path='/' element={ <InicioSesion /> }/>
        <Route exact path='/menuprincipal' element={ <MenuPrincipal /> } />
        <Route exact path='/eliminar' element={ <ModalEliminarUsuario /> } />
        <Route exact path='/usuario' element={ <VerUsuario /> } />
        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/datos' element={ <Datos /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        
      </Routes>
    </BrowserRouter>
      
  );
}