import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/formulario.css';

const FormularioModificarInfoCliente = () => {
    return(
        
        <Container fluid="sm">
            
          <div className='block-example'>   
            <React.Fragment>
                    <left><h4>MODIFICAR INFORMACIÓN CLIENTE</h4></left>
            </React.Fragment>
            
        <Form>
        
            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="nombre" placeholder="Digitar nombre" />
                    </Form.Group>
                </Col>
               
                <Col>
                <Form.Group className="mb-3" controlId="formBasicApellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="apellidos" placeholder="Digitar apellidos" />
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Digitar correo" />
                    </Form.Group>
                </Col>
            
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                        <Form.Label>Tipo Documento</Form.Label>
                        <Form.Select aria-label="Default select example">
                        <option>Seleccione el tipo de documento</option>
                        <option value="1">Cedula de ciudadania</option>
                        <option value="2">Pasaporte</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicNumDocumento">
                        <Form.Label>Núm. Documento</Form.Label>
                    <Form.Control type="num_documento" placeholder="Digitar documento" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="telefono" placeholder="Digitar telefono" />
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

export default FormularioModificarInfoCliente;