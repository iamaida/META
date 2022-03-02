import React, { Suspense } from 'react'
import reserva from '../../../assets/images-menu/reserva.jpg';
import '../../../styles/reservas/habitacionesDisponibles.css';
import Cookies from 'universal-cookie/es6';
import CardHabitacionesDisponibles from './CardHabitacionesDisponibles';
import { useEffect } from 'react';
import { useState } from 'react';

export default function CardsHabitacionesDisponibles() {

    
    const idHabitacion = new Cookies();
    const [habitaciones, setHabitaciones] = useState([]);

    useEffect(()=> {
      const datosHabitaciones = new Cookies();
      setHabitaciones(datosHabitaciones.get('datosHabitaciones'));
      console.log(datosHabitaciones.get('datosHabitaciones'));
    },[]);

    console.log(habitaciones);

    const seleccionarHab = (id) => {
        idHabitacion.set('idHabitacion', id , { path: '/' });
        console.log(idHabitacion.get('idHabitacion'));
    }

    const enviarDatos = (e) => {
      e.preventDefault();
  }
    
  return (
    <div>
      <Suspense delayMs={500} fallback={<div></div>}>
        {habitaciones.map(({id_habitacion, nombre, descripcion, capacidad, cantidad_camas, precio_persona}) => (
            <div key={id_habitacion} onSubmit={enviarDatos}>
            <CardHabitacionesDisponibles nombre={nombre} imagen={reserva} descripcion={descripcion} capacidad={capacidad} cantidad_camas={cantidad_camas} precio_persona={precio_persona} funcion={()=>seleccionarHab(id_habitacion)}/>
            </div>
        ))}
      </Suspense>
    </div>
  )
}
