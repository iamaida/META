import React from "react";
import Sidebar from '../Sidebar';
import NavbarMenuPrincipal from '../NavbarMenuPrincipal';
import BreadcrumbAgregarProductos from './BreadcrumbAgregarProductos';
import TablaAgregarProductos from './TablaAgregarProductos';
import Footer from '../Footer';
import '../../styles/moduloInventario.css';

const VerAgregarProductosServiciosCliente = () => {

    
    return(
        <div className='pago'>
            <Sidebar/>
            <NavbarMenuPrincipal/>
            <BreadcrumbAgregarProductos/>
            <TablaAgregarProductos />
            <Footer/>
         </div>
         
    
    );

}

export default VerAgregarProductosServiciosCliente;