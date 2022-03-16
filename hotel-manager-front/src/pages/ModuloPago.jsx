import React, {useEffect} from 'react'
import Sidebar from '../components/Sidebar';
import NavbarMenuPrincipal from '../components/NavbarMenuPrincipal';
import Footer from '../components/Footer';
import BreadcrumbInformacionCuenta from '../components/modulo-pago/BreadcrumbInformacionCuenta';
import InformacionCuenta from '../components/modulo-pago/InformacionCuenta';
import '../styles/moduloPago.css';


function ModuloPago() {


  return (
    <div className ="pago">
        <NavbarMenuPrincipal />
        <Sidebar />
       < BreadcrumbInformacionCuenta/>
       <InformacionCuenta />
       <div className='margen-footer'></div>
       <Footer />
    </div>
  )
}

export default ModuloPago;