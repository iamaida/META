import React from 'react';
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion';
import Sidebar from '../../../components/componentes-generales/Sidebar';
import Footer from '../../../components/componentes-generales/Footer';
import DetalleHabitacionReserva from '../../../components/reserva/ver-reserva/DetalleHabitacionReserva';
import DetalleClienteReserva from '../../../components/reserva/ver-reserva/DetalleClienteReserva';
import { Button } from 'react-bootstrap';
import '../../../styles/reservas/verReserva.css';
import BreadcrumbPaginas from '../../../components/componentes-generales/BreadcrumbPaginas';

export default function VerReserva() {
  return (
    <div>
        <Sidebar />
        <BarraNavegacion />
        <BreadcrumbPaginas nombre={'informacion reserva'}/>
        <DetalleHabitacionReserva />
        <DetalleClienteReserva />
        <div className='d-flex justify-content-end margen-botones'>
          <Button className='botones-reservas' variant='primary'>Modificar Reserva</Button>
          <Button className='botones-reservas' variant='danger'>Cancelar reserva</Button>
        </div>
        <Footer />
    </div>
  )
}
