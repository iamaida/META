import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../components/componentes-generales/Sidebar';
import BarraNavegacion from '../../components/componentes-generales/BarraNavegacion';
import BreadCrumbRegistrarProducto from '../../components/modulo-inventario/BreadCrumbRegistrarProducto';
import FormularioRegistrarProducto from '../../components/modulo-inventario/FormularioRegistrarProducto';
import Footer from '../../components/componentes-generales/Footer';
import '../../styles/moduloInventario.css';


const RegistrarProducto = () => {

    return (

       <div className="inventario">
           
           <Sidebar/>
           <BarraNavegacion/>
           <BreadCrumbRegistrarProducto/>     
           <FormularioRegistrarProducto/>
           <Footer/>
       </div>

    );

}




export default RegistrarProducto;