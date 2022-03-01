import React, { useState } from "react";
import {Button} from 'reactstrap'
import { Container, Accordion, Form } from 'react-boostrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/VerUsuario.css';
import '../../styles/moduloPago.css';
import axios from 'axios';
import AlertConfirmacion from '../../components/AlertConfirmacion';


const AcordeonPago = () => {


    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h4>
                            <FontAwesomeIcon icon={faCommentDollar} />&nbsp; Pagar en efectivo
                        </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <label for="efectivo">Ingrese el monto:</label>
                                </Col>
                                <Col>
                                    <input type="number" id="efectivo" placeholder="0"/>
                                </Col>
                            </Row>
                            <Row>
                                 <Col>&nbps;</Col>
                                <Col>
                                <Button color="outline-success"><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Pagar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h4>
                            <FontAwesomeIcon icon={faCreditCard} />&nbsp; Pagar con Tarjeta
                        </h4>

                    </Accordion.Header>
                    <Accordion.Body>
                       
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>




    );

}

export default AcordeonPago;