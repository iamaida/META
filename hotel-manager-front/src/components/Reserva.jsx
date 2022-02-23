import React, { useState, useEffect, useHistory } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Reserva.css';

const Reserva = () => {
    const userInfo = useState();
    
    const [fecha_ingreso, setFechaIngreso] = useState('');
    const [fecha_salida, setFechaSalida] = useState('');
    const [adultos, setAdultos] = useState('');
    const [menores, setMenores] = useState('');
    const [tipo_documento, setTipoDocumento] = useState('');
    const [num_documento, setNumDocumento] = useState('');
    


useEffect( ()=>{

    if(!userInfo){
        userInfo.push("/");
    }else{  
        setFechaIngreso(userInfo.fecha_ingreso);
        setFechaSalida(userInfo.fecha_salida);
        setAdultos(userInfo.email);
        setMenores(userInfo.menores);
        setTipoDocumento(userInfo.tipo_documento);
        setNumDocumento(userInfo.num_documento);
       
    }


},[userInfo]);




    
    return(
        
        <Container fluid="lg">
            
            <React.Fragment>
                    <center><h1>HACER RESERVACIÓN   </h1></center>
            </React.Fragment>

            <div className='block-example'>   
        <Form>
        
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <Form.Label>Fecha de ingreso</Form.Label>
                    <Form.Control type="fecha nacimiento" placeholder="dd/mm/aaaa" />
                    </Form.Group>
                </Col>
               
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <Form.Label>Fecha de salida</Form.Label>
                    <Form.Control type="fecha nacimiento" placeholder="dd/mm/aaaa" />
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicAdultos">
                    <Form.Label>Adultos(+13)</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione una opcion</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="2">4</option>
                        <option value="3">5</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicAdultos">
                    <Form.Label>Menores</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione una opcion</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="2">4</option>
                        <option value="3">5</option>
                    </Form.Select>
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

            <Container>
            <React.Fragment>
                    <center><h3>Reservas Activas   </h3></center>
            </React.Fragment>
            <Row>
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="25" maxlength="50" value="Habitacion #11
                    " name="nombre"></input>&nbsp;
                    
                    </Form.Group>
                </Col> <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="25" maxlength="50" value="Habitacion #12
                    " name="nombre"></input>&nbsp;
                     
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="25" maxlength="50" value="Habitacion #13" name="nombre"></input>&nbsp;
                   
                    </Form.Group>
                </Col> <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="25" maxlength="50" value="Habitacion #15" name="nombre"></input>&nbsp;
                   
                    </Form.Group>
                </Col>
   
  </Row>
                    </Container>
                
                    <form method="get" action="/consultas">
                        <button type="submit">Consultar </button>
                    </form>
 
                    <a href="http://localhost:3000/consultas" class="button">Consultar</a>
                    
        </Form>
        </div> 
        </Container>
    );
}
export default Reserva;
