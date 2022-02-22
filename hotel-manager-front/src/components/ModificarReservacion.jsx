import React from "react";
import { Container} from 'react-bootstrap';
import TabsModificarReserva from '../components/TabsModificarReserva';
import Footer from '../components/Footer';
import '../styles/formulario.css';

const ModificarReservacion = () => {
    return(
        
        <Container fluid="md">
              
            <React.Fragment>
                <div className='margen-superior'> 
                    <left><h3>INFORMACIÓN DE RESERVA</h3></left>
                </div> 
            </React.Fragment>
            <TabsModificarReserva/>
         </Container>
    
    );

}

export default ModificarReservacion;