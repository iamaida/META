import React from "react";
import Sidebar from '../../components/Sidebar';
import NavbarMenuPrincipal from '../../components/NavbarMenuPrincipal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import BreadCrumVerInventario from '../ver-inventario/BreadCrumbVerInventario';
import TablaInventario from '../ver-inventario/TablaInventario';
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