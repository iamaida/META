import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../styles/breadcrumbPaginas.css';

export default function BreadcrumbPaginasModificarReserva() {

  return (
    <div>
        <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/reserva">Reservas</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Información Reserva</Breadcrumb.Item>
        <Breadcrumb.Item active>Modificar</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}