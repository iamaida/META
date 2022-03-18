import React from 'react'
import Sidebar from '../components/componentes-generales/Sidebar'
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion';
import Footer from '../components/componentes-generales/Footer';
import BreadcrumbInformacionCuenta from '../components/modulo-pago/BreadcrumbInformacionCuenta';
import InformacionCuenta from '../components/modulo-pago/InformacionCuenta';
import '../styles/moduloPago.css';


function ModuloPago() {


  return (
    <div className ="pago">
        <Sidebar />
        <BarraNavegacion />
       < BreadcrumbInformacionCuenta/>
       <InformacionCuenta />
       <div className='margen-footer'></div>
       <Footer />
    </div>
  )
}

export default ModuloPago;