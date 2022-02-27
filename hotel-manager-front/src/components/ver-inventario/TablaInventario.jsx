import React, { useState } from "react";
import {  Button, Container, Row, Col, Modal, ModalBody, ModalHeader, FormGroup, Form, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlusCircle, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import '../../styles/VerUsuario.css';
import '../../styles/moduloInventario.css';
import axios from 'axios';
import AlertConfirmacion from '../../components/AlertConfirmacion';



const TablaInventario = () => {

    const [nombre, setNombre] = useState('');
    const [descrip, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState();
    const [cantidad, setCantidad] = useState('');
    const [modalModificar, setModalModificar] = useState(false);
    const openModalModificar = (registro) => { 
        setModalModificar(!modalModificar) ;
        
    }


  const  producto= {
        id:" ",
        nombre: "",
        descrip: "",
        imagen: "",
        precio: 0,
        cantidad: 0
    };



    const onChangeNombre= (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre);
    };

    const onChangeDescripcion = (e) => {
        setDescripcion(e.currentTarget.value);
        console.log(descrip);
    };

    const onChangeImagen = (e) => {
        setImagen(e.currentTarget.value);
        console.log(imagen);
    };

    const onChangePrecio = (e) => {
        setPrecio(e.currentTarget.value);
        console.log(precio);
    };
    const onChangeCantidad= (e) => {
        setCantidad(e.currentTarget.value);
        console.log(cantidad);
    };

    const products = [
        {
            id:"1",
            nombre: "Juego de Sabanas",
            descrip: "Unidad",
            imagen: "https://i.ibb.co/fHh724y/white-pillows-and-sheets-on-an-unmade-bed.jpg",
            precio: 40000,
            cantidad: 200
        },
        {
            id:"2",
            nombre: "Toalla",
            descrip: " Unidad",
            imagen: "https://i.ibb.co/chnVC1Z/hotel-bathroom-towels.jpg",
            precio: 12000,
            cantidad: 300
        },
        {
            id:"3",
            nombre: "Jabón de Baño",
            descrip: " Unidad",
            imagen: "https://i.ibb.co/DQnd77w/soap-bars-on-wood.jpg",
            precio: 2000,
            cantidad: 30
        }
    ];


    return (

        <>
            <Container className='usuario'>

                <Row className='titulo-boton'>
                    {/* Titulo Gestión Inventario*/}
                    <Col sm={8}>
                        <h2 className='titulo-principal'>
                            <FontAwesomeIcon icon={faWarehouse} />&nbsp; Gestión Inventario
                        </h2>
                    </Col>
                    {/* Botón Nuevo Producto*/}
                    <Col sm={4}>
                        <div className=' d-flex justify-content-end'>
                            <Button color="outline-success" onClick={() => this.mostrarModalInsertar()}><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Nuevo Producto</Button>
                        </div>
                    </Col>
                </Row>

                {/* Tabla Productos*/}
                {/* Titulo*/}
                <Row className='table-head'>

                    <Col>Imagen</Col>
                    <Col>Nombre</Col>
                    <Col>Descripción</Col>
                    <Col>Precio</Col>
                    <Col>Cantidad</Col>
                    <Col>Acciones</Col>

                </Row>
                {/* Cuerpo*/}
                <div className="scroll">
                    {products.map(( elemento ) => (
                        <Row className='table-body'>

                            <Col> <img src={elemento.imagen} /> </Col>
                            <Col>{elemento.nombre} </Col>
                            <Col>{elemento.descrip}</Col>
                            <Col>$ {elemento.precio}</Col>
                            <Col>{elemento.cantidad}</Col>
                            <Col>
                                <Button color="outline-primary" onClick={()=>openModalModificar(elemento)}> <FontAwesomeIcon icon={faPencilAlt} /> </Button>&nbsp;&nbsp;
                                <Button color="outline-danger"> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                            </Col>

                        </Row>
                    ))}
                </div>
            </Container>

            {/* Modal Modificar Producto*/}

            <Modal isOpen={modalModificar}
                >
                <ModalHeader>
                    <div><h3>MODIFICAR DATOS</h3></div>
                </ModalHeader>
                <ModalBody>
                    <Form >
                        <Row>
                            <Col>
                                <img src={products.imagen} />
                            </Col>
                            <Col>
                            <input className='form-control' name="src" type="text" value="src"/>               
                            </Col>
                            <Col>
                                
                                <Button color="primary">Editar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Nombre</label>
                                    <input className='form-control' name="nombre" type="text" value={products.nombre}/>

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>

                                    <label>Descripción</label>
                                    <input className='form-control' name="descrip" type="text" value={products.descrip}/>

                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Precio</label>
                                    <input className='form-control' name="precio" type="text" value={products.precio} />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="text" value={products.cantidad}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={openModalModificar}>Cancelar</Button>
                    <Button color="primary">Guardar</Button>
                </ModalFooter>
            </Modal>
        </>

    );

}

export default TablaInventario;