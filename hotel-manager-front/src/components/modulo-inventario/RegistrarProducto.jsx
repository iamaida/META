import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Sidebar';
import NavbarMenuPrincipal from '../NavbarMenuPrincipal';
import BreadCrumbRegistrarProducto from '../../components/modulo-inventario/BreadCrumbRegistrarProducto';
import FormularioRegistrarProducto from '../../components/modulo-inventario/FormularioRegistrarProducto';
import Footer from '../Footer';
import '../../styles/moduloInventario.css';


const RegistrarProducto = () => {

    return (

       <div className="inventario">
           
           <Sidebar/>
           <NavbarMenuPrincipal/>
           <BreadCrumbRegistrarProducto/>     
           <FormularioRegistrarProducto/>
           <Footer/>
       </div>

    );

}




export default RegistrarProducto;