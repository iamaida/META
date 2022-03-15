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
import Datos from './components/Datos';
import Prueba from './components/Prueba';
import Cargando from './components/componentes-generales/Cargando';

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
        <Route exact path='/datos' element={ <Datos /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        <Route exact path='/cargando' element={ <Cargando /> } />
        

        
      </Routes>
    </BrowserRouter>
      
  );
}