import React from "react";
import Sidebar from '../components/Sidebar';
import NavbarMenuPrincipal from '../components/NavbarMenuPrincipal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import BreadCrumPaginasModificarReserva from '../components/BreadCrumPaginasModificarReserva';
import TabsModificarReserva from '../components/TabsModificarReserva';
import Footer from '../components/Footer';
import '../styles/modificarReserva.css';

const ModificarReservacion = () => {
    return(
        <div className='principal'>
             <NavbarMenuPrincipal/>
            <Sidebar/>
            <BreadCrumPaginasModificarReserva/>
            <React.Fragment>
                <div className='title-style'> 
                    <left><h2>
                        <FontAwesomeIcon icon={faPlusCircle} />&nbsp;Información de reserva
                        </h2></left>
                </div> 
            </React.Fragment>
            
            <TabsModificarReserva/>
            <div className='margen-footer'></div>
            <Footer/>
         </div>
         
    
    );

}

export default ModificarReservacion;