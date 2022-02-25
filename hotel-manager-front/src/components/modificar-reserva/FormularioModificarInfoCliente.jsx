import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../../styles/modificarReserva.css';

const FormularioModificarInfoCliente = () => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState(' ');
    const [tipo_doc, setTipo_doc] = useState('C.C.');
    const [num_doc, setNum_doc] = useState('');
    const [telefono, setTelefono] = useState('');
    const [estado_civil, setEstado_civil] = useState('');
    const [donde_viene, setDonde_viene] = useState('');
    const [para_donde_va, setDonde_va] = useState('');
    const [vehiculo, setVehiculo] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [profesion, setProfesion] = useState('');
   
  

    const onChangeNombre = (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre);
    };

    const onChangeApellidos = (e) => {
        setApellidos(e.currentTarget.value);
        console.log(apellidos);
    };

    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value);
        console.log(email);
    };

    const onChangeTipoDoc = (e) => {
        setTipo_doc(e.currentTarget.value);
        console.log(tipo_doc);
    };

    const onChangeNumDoc = (e) => {
        setNum_doc(e.currentTarget.value);
        console.log(num_doc);
    };

    const onChangeTelefono = (e) => {
        setTelefono(e.currentTarget.value);
        console.log(telefono);
    };

    const onChangeEstadoCivil = (e) => {
        setEstado_civil(e.currentTarget.value);
        console.log(estado_civil);
    };

    const onChangeDondeViene = (e) => {
        setDonde_viene(e.currentTarget.value);
        console.log(donde_viene);
    };

    const onChangeParaDondeVa = (e) => {
        setDonde_va(e.currentTarget.value);
        console.log(para_donde_va);
    };

    const onChangeVehiculo= (e) => {
        setVehiculo(e.currentTarget.value);
        console.log(vehiculo);
    };

    const onChangeNacionalidad= (e) => {
        setNacionalidad(e.currentTarget.value);
        console.log(nacionalidad);
    };

    const onChangeProfesion= (e) => {
        setProfesion(e.currentTarget.value);
        console.log(profesion);
    };

    var tipos_documento = [];
    const validarTipoDocumento = () => {

        if(tipo_doc=='C.C.'){
            tipos_documento[0]='T.I.';
            tipos_documento[1]='C.E.';
        }else if(tipo_doc=='T.I.'){
            tipos_documento[0]='C.C.';
            tipos_documento[1]='C.E.';
        }else{
            tipos_documento[0]='C.C.';
            tipos_documento[1]='T.I.';
        }
    }
    validarTipoDocumento()

    return(
        
        <div className='form-style'>
              
            <React.Fragment>
                    <left><h4>MODIFICAR INFORMACIÓN CLIENTE</h4></left>
            </React.Fragment>
            
        <Form>
        
            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='nombre' placeholder="Nombre" onChange ={onChangeNombre} />
                    </Form.Group>
                </Col>
               
                <Col>
                <Form.Group className="mb-3" controlId="formBasicApellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control name='apellidos' placeholder="Apellidos" onChange ={onChangeApellidos}  />
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control name='email' placeholder="Correo Electrónico" onChange ={onChangeEmail}  />
                    </Form.Group>
                </Col>
            
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                        <Form.Label>Tipo Documento</Form.Label>
                        <Form.Select name='tipo_doc' onChange={onChangeTipoDoc}>
                        <option>{tipo_doc}</option>
                        <option value={tipos_documento[0]}>{tipos_documento[0]}</option>
                        <option value={tipos_documento[1]}>{tipos_documento[1]}</option>
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
      
    );

}

export default FormularioModificarInfoCliente;