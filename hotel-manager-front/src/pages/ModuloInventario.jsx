import React from "react";
import Sidebar from '../components/Sidebar';
import NavbarMenuPrincipal from '../components/NavbarMenuPrincipal';
import BreadCrumVerInventario from '../components/modulo-inventario/BreadCrumbVerInventario';
import TablaInventario from '../components/modulo-inventario/TablaInventario';
import Footer from '../components/Footer';
import '../styles/moduloInventario.css';

const VerInventario = () => {

    
    return(
        <div className='principal'>
            <Sidebar/>
            <NavbarMenuPrincipal/>
            <BreadCrumVerInventario/>
            <TablaInventario/>
            <div className='margen-footer'></div>
            <Footer/>
         </div>
         
    
    );

}

export default VerInventario;