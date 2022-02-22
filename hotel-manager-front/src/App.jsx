import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
import ModuloUsuarios from './pages/ModuloUsuarios';

export function App() {
  return(

    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <InicioSesion /> }/>
          <Route exact path='/menuprincipal' element={ <MenuPrincipal/> } />
          <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        </Routes>
    </BrowserRouter>
      
  );
}