import React from 'react'
import { Breadcrumb, Button } from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';

export default function BreadcrumbPaginas({nombre}) {
    var datos = [];
    const paginacion={
        usuarios: {
            paginas: ['Inicio', 'Gestion de Usuarios'],
            referencias:['/menuprincipal'] 
        },
        reservas: {
            paginas: ['Inicio', 'Gestion de Reservas'],
            referencias: ['/menuprincipal']
        },
        seleccion_hab_hacer_reserva: {
            paginas: ['Inicio', 'Gestion de Reservas', 'Selección habitación'],
            referencias: ['/menuprincipal', '/reservas']
        },
        datos_personales_hacer_reserva:{
            paginas: ['Inicio', 'Gestion de Reservas', 'Selección habitación', 'Datos Personales'],
            referencias: ['/menuprincipal', '/reservas', '/consultaHabitaciones']
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

    const obtenerRuta = () => {
           
    }

    const validarDatos = () => {
        const paginas = datos['paginas']
        console.log(paginas);
    }

  return (
    <div>
        <Breadcrumb className='breadcrumb'>
            {/*{datos.map(({paginas, referencias}) => (
                
                <Breadcrumb.Item className='breadcrumb-text' href={paginas}>{referencias}</Breadcrumb.Item>    
            ))}*/}
            
          
            <Breadcrumb.Item active >{datos.pag2}</Breadcrumb.Item>
        </Breadcrumb>
        <Button variant='primary' onClick={()=>validarDatos()}>Boton </Button>
    </div>
  )
}
