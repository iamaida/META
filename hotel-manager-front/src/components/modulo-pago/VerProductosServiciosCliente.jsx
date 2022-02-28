import React from "react";
import Sidebar from '../Sidebar';
import NavbarMenuPrincipal from '../../components/NavbarMenuPrincipal';
import BreadcrumbProductosServicios from '../modulo-pago/BreadcrumbProductosServicios';
import TablaProductosServicios from '../modulo-pago/TablaProductosServicios';
import Footer from '../../components/Footer';
import '../../styles/moduloInventario.css';

const VerProductosServiciosCliente = () => {

    
    return(
        <div className='pago'>
            <NavbarMenuPrincipal/>
            <Sidebar/>
            <BreadcrumbProductosServicios/>
            <TablaProductosServicios />
            <div className='margen-footer'></div>
            <Footer/>
         </div>
         
    
    );

}

export default VerProductosServiciosCliente;