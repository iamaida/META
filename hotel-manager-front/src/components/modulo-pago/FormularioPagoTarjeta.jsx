import React, { useState } from "react";
import { Button } from 'reactstrap'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../../styles/VerUsuario.css';
import '../../styles/moduloPago.css';
import axios from 'axios';
import AlertConfirmacion from '../../components/AlertConfirmacion';


const FormularioPagoTarjeta = () => {


    return (

        <div className="form-pago-tarjeta">
            <Form >  
                <Row>
                    <Row>
                        <Col sm ={5}>
                            <label for="numero-tarjeta">Número Tarjeta</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                        <input type="text" size={42} id="numero-tarjeta" placeholder="número tarjeta"/>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row>
                     <Col sm={2}>  <label for="caducidad">Caducidad</label> </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <input type="text" id="mes" size={15} placeholder="mm"/>
                        </Col>
                        <Col sm={2}>
                            <input type="text" id="año" size={15} placeholder="aa"/>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row>
                        <Col sm={4}> 
                            <label for="caducidad">Cod. Seguridad</label>
                        </Col>
                         
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <input size={42} type="text" id="codigo-seguridad" placeholder="codigo"/>
                        </Col>
                    </Row>
                </Row>
                <Row>&nbsp;</Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={6}>
                    <Button color="outline-success" ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Pagar</Button>
                    </Col>
                </Row>
            </Form>
            </div>
    );

}

export default FormularioPagoTarjeta;