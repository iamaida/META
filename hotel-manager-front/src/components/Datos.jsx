import React, { useState, useEffect, useHistory } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Datos.css';

const Datos = () => {
    const userInfo = useState();
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [con_email, setConEmail] = useState('');
    const [tipo_documento, setTipoDocumento] = useState('');
    const [num_documento, setNumDocumento] = useState('');
    const [fecha_nacimiento, setFechaNacimiento] = useState('');
    const [cargo, setCargo] = useState('');
    
    const [password, setPassword] = useState('');





useEffect( ()=>{

    if(!userInfo){
        userInfo.push("/");
    }else{  
        setNombre(userInfo.nombre);
        setApellido(userInfo.apellido);
        setEmail(userInfo.email);
        setConEmail(userInfo.con_email);
        setTipoDocumento(userInfo.tipo_documento);
        setNumDocumento(userInfo.num_documento);
        
    }


},[userInfo]);




    
    return(
        
        <Container fluid="lg">
            
            <React.Fragment>
                    <center><h1>DATOS DE RESERVA</h1></center>
            </React.Fragment>

            <div className='block-example'>   
        <Form>
        
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="nombre" placeholder="Enter nombre" />
                    </Form.Group>
                </Col>
               
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="apellido" placeholder="Enter apellido" />
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirmar Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Tipo de documento</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione el tipo de documento</option>
                        <option value="1">Tarjeta de Identidad</option>
                        <option value="2">C.C</option>
                        <option value="3">Pasaporte</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Numero de documento</Form.Label>
                    <Form.Control type="telefono" placeholder="Enter de documento" />
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="telefono" placeholder="Enter telefono" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Habitacion Disponible</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione la Habitacion</option>
                        <option value="1">Habitacion sencilla #203</option>
                        <option value="2">Habitacion berlin #204</option>
                        <option value="3">Habitacion doble berlin #205</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
                
                
            
            </Row>

            <Row>
                
               

                <Col>
                    <Button variant="primary" type="guardar">
                        Terminar Reserva
                    </Button> 
                </Col>
            </Row>
           
        </Form>
        </div> 
        </Container>
    );
}
export default Datos;