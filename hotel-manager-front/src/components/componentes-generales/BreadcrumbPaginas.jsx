import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';

export default function BreadcrumbPaginas({nombre}) {
    var datos = [];
    const paginacion={
        usuarios: {
            nombre: 'usuario',
            pag1: 'Inicio',
            ref1: '/menuprincipal',
            pag2: 'Gestión de usuarios'
        },
        reservas: {
            nombre: 'reserva',
            pag1: 'Inicio',
            ref: '/menuprincipal',
            pag2: 'Gestion de reservas'
        }
        
    }

    const validacion = () => {
        if(paginacion[nombre]===undefined){
            console.log('no esta disponible');
        }else{
            const datos=paginacion[nombre];
            console.log(datos);
            return datos;
        }   
    }
    
    datos = validacion();

  return (
    <div>
        <Breadcrumb className='breadcrumb'>
            <Breadcrumb.Item className='breadcrumb-text' href={datos.ref1}>{datos.pag1}</Breadcrumb.Item>
          
            <Breadcrumb.Item active >{datos.pag2}</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}
