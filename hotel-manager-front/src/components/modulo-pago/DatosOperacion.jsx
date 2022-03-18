import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloPago.css';
import FormularioDatosOperacion from './FormularioDatosOperacion';
import AcordeonPago from './AcordeonPago';

const DatosOperacion = () => {

    
    return(
        <>
        <Form>
            <Row className="datos-operacion">
                <Col>
                <FormularioDatosOperacion/>
                </Col>
                <Col>
                 <AcordeonPago/> 
                 </Col>
            </Row>
            </Form>
                    </>       
             
    );

}
export default DatosOperacion;