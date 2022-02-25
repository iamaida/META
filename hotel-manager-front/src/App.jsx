import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
import Reserva from './components/Reserva';
import Consultas from './components/Consultas';
import Datos from './components/Datos';
import Prueba from './components/Prueba';
import ModuloUsuarios from './pages/ModuloUsuarios';
import ConsultarReserva from './components/ConsultarReserva';
import ModificarReservacion from './components/modificar-reserva/ModificarReservacion';
import VerInventario from './components/ver-inventario/VerInventario';


export function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <InicioSesion /> }/>
        <Route exact path='/menuprincipal' element={ <MenuPrincipal /> } />
        <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/datos' element={ <Datos /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        <Route exact path='/consultarReservas' element={ <ConsultarReserva /> } />
         <Route exact path='/modificarreserva' element={ <ModificarReservacion /> } />
         <Route exact path='/inventario' element={ <VerInventario /> } />
        
      </Routes>
    </BrowserRouter>
      
  );
}