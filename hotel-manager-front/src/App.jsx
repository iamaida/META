import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
import Reserva from './components/Reserva';
import Consultas from './components/Consultas';
import Prueba from './components/Prueba';
import ModuloUsuarios from './pages/ModuloUsuarios';
import ConsultarReserva from './components/ConsultarReserva';
import ModificarReservacion from './components/modificar-reserva/ModificarReservacion';
import ModuloInventario from './pages/ModuloInventario';
import VerProductosServiciosCliente from './components/modulo-pago/VerProductosServiciosCliente';
import RegistrarProducto from './components/modulo-inventario/RegistrarProducto';
import ModuloPago from './pages/ModuloPago';

export function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <InicioSesion /> }/>
        <Route exact path='/menuprincipal' element={ <MenuPrincipal /> } />
        <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        <Route exact path='/consultarReservas' element={ <ConsultarReserva /> } />
         <Route exact path='/modificarreserva' element={ <ModificarReservacion /> } />
         <Route exact path='/inventario' element={ <ModuloInventario /> } />
         <Route exact path='/registarproducto' element={ <RegistrarProducto /> } />
         <Route exact path='/pago' element={ <ModuloPago /> } />
         <Route exact path='/pagoserviciosproductoscliente' element={ <VerProductosServiciosCliente  /> } />
        
      </Routes>
    </BrowserRouter>
      
  );
}