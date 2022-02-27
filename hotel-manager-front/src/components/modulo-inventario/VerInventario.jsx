import React from "react";
import Sidebar from '../Sidebar';
import NavbarMenuPrincipal from '../../components/NavbarMenuPrincipal';
import BreadCrumVerInventario from '../modulo-inventario/BreadCrumbVerInventario';
import TablaInventario from '../modulo-inventario/TablaInventario';
import Footer from '../../components/Footer';
import '../../styles/moduloInventario.css';

const VerInventario = () => {

    
    return(
        <div className='principal'>
            <NavbarMenuPrincipal/>
            <Sidebar/>
            <BreadCrumVerInventario/>
            <TablaInventario/>
            <div className='margen-footer'></div>
            <Footer/>
         </div>
         
    
    );

}

export default VerInventario;