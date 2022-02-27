import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/moduloInventario.css';
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Col, Row, Form, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlusCircle, faWarehouse } from '@fortawesome/free-solid-svg-icons';


const ModalNuevoProducto = () => {



    const [modalModificar, setModalModificar] = useState(false);
    const openModalModificar = () => { setModalModificar(!modalModificar) }



    return (

        <div>

            <Button color="outline-success" onClick={openModalModificar}><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Nuevo Producto</Button>
            <Modal isOpen={modalModificar}
                openModalModificar={openModalModificar}>
                <ModalHeader>
                    <div><h3>MODIFICAR DATOS</h3></div>
                </ModalHeader>
                <ModalBody>
                    <Form >
                        <Row>
                            <Col>
                                <img src="#" />
                            </Col>
                            <Col>
                                 <Button color="primary">Editar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Nombre</label>
                                    <input className='form-control' name="nombre" type="text" />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>

                                    <label>Descripción</label>
                                    <input className='form-control' name="descrip" type="text" />

                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Precio</label>
                                    <input className='form-control' name="precio" type="text" />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="text" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger">Cancelar</Button>
                    <Button color="primary">Guardar</Button>
                 </ModalFooter>
            </Modal>
        </div>

    );

}




export default ModalNuevoProducto;