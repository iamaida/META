import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/formulario.css';

const FormularioModificarReservacion = () => {
    return(
        
        <Container fluid="sm">
            
          <div className='block-example'>   
            <React.Fragment>
                    <left><h4>MODIFICAR RESERVACIÓN</h4></left>
            </React.Fragment>
            
        <Form>
        
            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Fecha Ingreso</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione fecha ingreso</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
               
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Fecha Salida</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione fecha salida</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Adultos (+13)</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione número de adultos</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                        <option value="6" >6</option>
                        <option value="7" >7</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Menores</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione el número de menores</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                        <option value="6" >6</option>
                        <option value="7" >7</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
            
            </Row>
            <Row>
                <Col md="10"></Col>
                <Col >
                <Button variant="primary">Guardar</Button>
                </Col>
            </Row>
        </Form>
        </div> 
        </Container>
    );

}

export default FormularioModificarReservacion;