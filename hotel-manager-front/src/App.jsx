import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
<<<<<<< HEAD
=======
import ModuloUsuarios from './pages/ModuloUsuarios';
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
import Reserva from './components/Reserva';
import Consultas from './components/Consultas';
import Datos from './components/Datos';
import Prueba from './components/Prueba';
<<<<<<< HEAD
import ModuloUsuarios from './pages/ModuloUsuarios';
import ConsultarReserva from './components/ConsultarReserva';
=======
import ModificarReservacion from './components/modificar-reserva/ModificarReservacion';
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5


export function App() {
  return(

    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route exact path='/' element={ <InicioSesion /> }/>
        <Route exact path='/menuprincipal' element={ <MenuPrincipal /> } />
        <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/datos' element={ <Datos /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        <Route exact path='/consultarReservas' element={ <ConsultarReserva /> } />
=======
        <Routes>
          <Route exact path='/' element={ <InicioSesion /> }/>
          <Route exact path='/menuprincipal' element={ <MenuPrincipal/> } />
          <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
         <Route exact path='/reserva' element={ <Reserva /> } />
         <Route exact path='/consultas' element={ <Consultas /> } />
         <Route exact path='/datos' element={ <Datos /> } />
         <Route exact path='/prueba' element={ <Prueba /> } />
         <Route exact path='/modificarreserva' element={ <ModificarReservacion /> } />
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
        
      </Routes>
    </BrowserRouter>
      
  );
}