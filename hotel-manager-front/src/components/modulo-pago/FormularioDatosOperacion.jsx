import React, { useState } from "react";
import { Button } from 'reactstrap'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../../styles/VerUsuario.css';
import '../../styles/moduloPago.css';
import axios from 'axios';
import AlertConfirmacion from '../../components/AlertConfirmacion';


const FormularioDatosOperacion = () => {

    return (

        <div className="contenedor-formulario-datosoperacion">
        <Form className="formulario-datosoperacion"> 
                <Row className="margen-fila">
                        <Col>
                                <h4>
                                        Datos de la operación
                                </h4>
                        </Col>    
                        
                </Row> 
                <Row className="margen-fila">
                    
                    <Col sm ={6}>
                            <label for="importe">Importe:</label>
                    </Col>
                    <Col sm ={6}>
                            <label for="cantidad-importe"><h4>$100.000</h4></label>
                    </Col>
                        
                </Row>
                <Row className="margen-fila">
                     <Col sm ={6}>
                            <label for="cliente">Cliente:</label>
                    </Col>
                    <Col sm ={6}>
                            <label for="nombre-cliente">Pepito Perez</label>
                    </Col>
                </Row>
                <Row className="margen-fila">
                     <Col sm ={6}>
                            <label for="tipo-documento">Tipo Doc:</label>
                    </Col>
                    <Col sm ={6}>
                            <label for="tipo-documento">C.C.</label>
                    </Col>
                </Row>
                <Row className="margen-fila">
                     <Col sm ={6}>
                            <label for="numero-documento">Núm. Doc:</label>
                    </Col>
                    <Col sm ={6}>
                            <label for="numero-documento">1234567890</label>
                    </Col>
                </Row>
                <Row className="margen-ultima-fila">
                     <Col sm ={6}>
                            <label for="fecha">Fecha:</label>
                    </Col>
                    <Col sm ={6}>
                            <label for="una-fecha">07/12/2021</label>
                    </Col>
                </Row>
              
               
            </Form>

            </div>
    );

}

export default FormularioDatosOperacion;