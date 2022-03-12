import React from 'react';
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion';
import Sidebar from '../../../components/componentes-generales/Sidebar';
import Footer from '../../../components/componentes-generales/Footer';
import DetalleHabitacionReserva from '../../../components/reserva/ver-reserva/DetalleHabitacionReserva';
import DetalleClienteReserva from '../../../components/reserva/ver-reserva/DetalleClienteReserva';

export default function VerReserva() {
  return (
    <div>
        <Sidebar />
        <BarraNavegacion />
        <DetalleHabitacionReserva />
        <DetalleClienteReserva />
        <Footer />
    </div>
  )
}
