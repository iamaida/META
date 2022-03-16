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
    const [vehiculo, setVehiculo] = useState('false');
    const [nacionalidad, setNacionalidad] = useState('');
    const [profesion, setProfesion] = useState('');
    const tipos_documento = ['C.C.', 'T.I.', 'C.E'];
    const opcion_vehiculo = ['true', 'false'];



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

    const onChangeVehiculo = (e) => {
        setVehiculo(e.currentTarget.value);
        console.log(vehiculo);
    };

    const onChangeNacionalidad = (e) => {
        setNacionalidad(e.currentTarget.value);
        console.log(nacionalidad);
    };

    const onChangeProfesion = (e) => {
        setProfesion(e.currentTarget.value);
        console.log(profesion);
    };


    const validarTipoDocumento = (t_doc) => {
        let copia_tipos_documento = tipos_documento.slice()
        for (let i = 0; i < copia_tipos_documento.length; i++) {
            if (t_doc === copia_tipos_documento[i]) {
                copia_tipos_documento.splice(i, 1);
            }
        }
        return copia_tipos_documento;
    };

    const validarOpcionVehiculo = (tiene_vehiculo) => {
        let copia_opcion_vehiculo = opcion_vehiculo.slice()
        for (let i = 0; i < copia_opcion_vehiculo.length; i++) {
            if (tiene_vehiculo == copia_opcion_vehiculo[i]) {
                copia_opcion_vehiculo.splice(i, 1);
            }
        }
        return copia_opcion_vehiculo;
    };


    return (

        <div className='form-style'>

            <React.Fragment>
                <left><h4>Modificar Información Cliente</h4></left>
            </React.Fragment>

            <Form>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name='nombre' placeholder={nombre} onChange={onChangeNombre} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicApellidos">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control name='apellidos' placeholder={apellidos} onChange={onChangeApellidos} />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                            <Form.Label>Tipo Documento</Form.Label>
                            <Form.Select name='tipo_doc' placeholder={tipo_doc} onChange={onChangeTipoDoc}>
                                <option>{tipo_doc}</option>
                                {validarTipoDocumento(tipo_doc).map((t_doc) => (
                                    <option key={t_doc} value={t_doc}>{t_doc}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicNumDocumento">
                            <Form.Label>Núm. Documento</Form.Label>
                            <Form.Control name='num_doc' placeholder={num_doc} onChange={onChangeNumDoc} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>


                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicNacionalidad">
                            <Form.Label>Nacionalidad</Form.Label>
                            <Form.Control name='nacionalidad' placeholder={nacionalidad} onChange={onChangeNacionalidad} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control name='telefono' placeholder={telefono} onChange={onChangeTelefono} />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control name='email' placeholder={email} onChange={onChangeEmail} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicProfesion">
                            <Form.Label>Profesión</Form.Label>
                            <Form.Control name='profesion' placeholder={profesion} onChange={onChangeProfesion} />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicVehículo">
                            <Form.Label>¿Tiene Vehiculo?</Form.Label>
                            <div key='inline-radio'  className="check-buttoms">
                            <Form.Check
                                inline
                                label="si"
                                name="grupo1"
                                type='radio'
                                id='inline-radio-1'
                            />
                            <Form.Check
                                inline
                                label="no"
                                name="gropo1"
                                type='radio'
                                id='inline-radio-2'
                            />
                            </div>
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