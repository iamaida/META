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
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0,2);
    const [modalModificar, setModalModificar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [producto, setProducto] = useState( {
        id:" ",
        nombre: "",
        descrip: "",
        imagen: "",
        precio: 0,
        cantidad: 0
    })
    const [products, setProducts] =useState([
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
    ])

    
    const openModalModificar = (registro) => { 
        setModalModificar(true) ;
        setProducto(registro) ;
    }
    const closeModalModificar = () =>{
        setModalModificar(false)
    }

    const openModalEliminar = (registro) => { 
        setModalEliminar(true) ;
    }

    const closeModalEliminar = () =>{
        setModalEliminar(false)
    }


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



    const modificarDatosProducto = () => {
        let p ={
        id:" ",
        nombre: nombre,
        descrip: descrip,
        imagen: imagen,
        precio: precio,
        cantidad: cantidad
        }

        setProducto(p);
        let nuevos_productos = products;
        for(let i=0; i<products.length; i++)
        {
            if(products.nombre=== producto.nombre)
            {
                nuevos_productos[i]=producto;
            }
        }

        setProducts(nuevos_productos)

    };

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
                            <Button color="outline-success" href='/registarproducto' ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Nuevo Producto</Button>
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
                                <Button color="outline-danger" onClick={openModalEliminar}> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                            </Col>

                        </Row>
                    ))}
                </div>
            </Container>

            {/* Modal Modificar Producto*/}

            <Modal isOpen={modalModificar}
                >
                <ModalHeader>
                    <div><h3>MODIFICAR DATOS PRODUCTO</h3></div>
                </ModalHeader>
                <ModalBody>
                    <Form >
                        <Row>
                            <Col>
                                <img src={producto.imagen} />
                            </Col>
                            <Col>
                                
                                <Button color="secondary">Editar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Nombre</label>
                                    <input className='form-control' name="nombre" type="text" value={producto.nombre} onChange={onChangeNombre} />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>

                                    <label>Descripción</label>
                                    <input className='form-control' name="descrip" type="text" onChange={onChangeDescripcion} value={producto.descrip}/>

                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Precio</label>
                                    <input className='form-control' name="precio" type="text" onChange={onChangePrecio} value={producto.precio} />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="text" onChange={onChangeCantidad}  value={producto.cantidad}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={closeModalModificar}>Cancelar</Button>
                    <Button color="primary" onClick={modificarDatosProducto}>Guardar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
                    <ModalHeader>
                        <div><h3>ELIMINAR PRODUCTO</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        ¿Está seguro de eliminar el producto?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" onClick={closeModalEliminar}>Cancelar</Button>
                        <Button color="primary" >Aceptar</Button>
                        
                    </ModalFooter>
                </Modal>



        </>

    );

}

export default TablaInventario;