import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
import ModuloUsuarios from './pages/ModuloUsuarios';
import ModuloReservas from './pages/ModuloReservas';
import ConsultaHabitacionesDisponibles from './pages/reservas/hacer-reserva/ConsultaHabitacionesDisponibles';
import DatosCliente from './pages/reservas/hacer-reserva/DatosCliente';
import VerReserva from './pages/reservas/ver-reserva/VerReserva';

import Reserva from './components/Reserva';
import Consultas from './components/Consultas';
import Prueba from './components/Prueba';
<<<<<<< HEAD
import Cargando from './components/componentes-generales/Cargando';
=======
import ModuloUsuarios from './pages/ModuloUsuarios';
import ConsultarReserva from './components/ConsultarReserva';
import ModificarReservacion from './components/modificar-reserva/ModificarReservacion';
import ModuloInventario from './pages/ModuloInventario';
import VerProductosServiciosCliente from './components/modulo-pago/VerProductosServiciosCliente';
import RegistrarProducto from './components/modulo-inventario/RegistrarProducto';
import VerAgregarProductosServiciosCliente from './components/modulo-pago/VerAgregarProductosServiciosCliente';
import DatosOperacion from './components/modulo-pago/DatosOperacion';
import ModuloPago from './pages/ModuloPago';
>>>>>>> rama-aida

export function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <InicioSesion /> }/>
        <Route exact path='/menuPrincipal' element={ <MenuPrincipal /> } />
        <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        <Route exact path='/reservas' element={ <ModuloReservas />} />
        <Route exact path='/consultaHabitaciones' element={ <ConsultaHabitacionesDisponibles />} />
        <Route exact path='/datosCliente' element={ <DatosCliente />} />
        <Route exact path='/verReserva' element={ <VerReserva /> } />


        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
<<<<<<< HEAD
        <Route exact path='/cargando' element={ <Cargando /> } />
        

=======
        <Route exact path='/consultarReservas' element={ <ConsultarReserva /> } />
         <Route exact path='/modificarreserva' element={ <ModificarReservacion /> } />
         <Route exact path='/inventario' element={ <ModuloInventario /> } />
         <Route exact path='/registarproducto' element={ <RegistrarProducto /> } />
         <Route exact path='/pago' element={ <ModuloPago /> } />
         <Route exact path='/pagoserviciosproductoscliente' element={ <VerProductosServiciosCliente  /> } />
         <Route exact path='/pagoagregarserviciosproductoscliente' element={ <VerAgregarProductosServiciosCliente  /> } />
         <Route exact path='/realizarpago' element={ <DatosOperacion /> } />
>>>>>>> rama-aida
        
      </Routes>
    </BrowserRouter>
      
  );
}