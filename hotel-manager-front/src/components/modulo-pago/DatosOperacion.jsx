import React, { useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../../styles/VerUsuario.css';
import '../../styles/moduloPago.css';
import FormularioDatosOperacion from './FormularioDatosOperacion';
import AcordeonPago from './AcordeonPago';
import axios from 'axios';
import AlertConfirmacion from '../../components/AlertConfirmacion';

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