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
<<<<<<< HEAD
import Reportes from './components/Reportes';
=======
import Cargando from './components/componentes-generales/Cargando';
import CargandoEliminarReserva from './components/reserva/ver-reserva/cargandoEliminarReserva';
import ModificarReservacion from './components/reserva/modificar-reserva/ModificarReservacion';
import VerReportes from './components/reportes/VerReportes';
import VerReportes2 from './components/reportes/VerReportes2';
>>>>>>> 68bc166e91e8f2f7c7855c59c15f393a6562481c

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
<<<<<<< HEAD

        <Route exact path='/reportes' element={ <Reportes />} />
=======
        <Route exact path='/verReserva' element={ <VerReserva /> } />
        <Route exact path='/cargando' element={ <Cargando /> } />
        <Route exact path='/cargandoeliminarreserva' element={ <CargandoEliminarReserva /> } />

>>>>>>> 68bc166e91e8f2f7c7855c59c15f393a6562481c
        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/datos' element={ <Datos /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        <Route exact path='/modificarreserva' element={ <ModificarReservacion/> } />
        <Route exact path='/reportes' element={ <VerReportes/> } />
        <Route exact path='/reportes2' element={ <VerReportes2/> } />
        
        

        
      </Routes>
    </BrowserRouter>
      
  );
}