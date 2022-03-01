import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../styles/breadcrumbPaginas.css';


 function BreadcrumbAgregarProductos() {

    return (
      <div>
          <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/pago">Pago</Breadcrumb.Item>
          <Breadcrumb.Item active>Información Cuenta</Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
  }

  export default BreadcrumbAgregarProductos;