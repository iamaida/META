import React, { useState } from "react";
import {  Button, Container, Row, Col, Modal, ModalBody, ModalHeader, FormGroup, Form, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlusCircle, faBeer, faEgg } from '@fortawesome/free-solid-svg-icons';
import '../../styles/VerUsuario.css';
import '../../styles/moduloPago.css';
import axios from 'axios';
import AlertConfirmacion from '../../components/AlertConfirmacion';

const TablaAgregarProductos = () => {

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
            nombre: "Desayuno",
            descrip: "Unidad",
            imagen: "https://i.ibb.co/k1kgGGj/desayuno.jpg",
            precio: 15000,
            cantidad: 3
        },
        {
            id:"2",
            nombre: "Lavanderia",
            descrip: "Pieza",
            imagen: "https://i.ibb.co/f1by7dK/lavanderia.jpg",
            precio: 5000,
            cantidad: 1
        },
        {
            id:"3",
            nombre: "Barra",
            descrip: "Abierta",
            imagen: "https://i.ibb.co/2vdHXCc/bar.jpg",
            precio: 50000,
            cantidad: 3
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


  
    const onChangeImagen = (e) => {
        setImagen(e.currentTarget.value);
        console.log(imagen);
    };

    const onChangeCantidad= (e) => {
        setCantidad(e.currentTarget.value);
        console.log(cantidad);
    };


    return (

        <>
            <Container className='usuario'>

                <Row className='titulo-boton'>
                    {/* Titulo Gestión Productos y Servicios a agregar*/}
                    <Col sm={8}>
                        <h2 className='titulo-principal'>
                            <FontAwesomeIcon icon={faBeer} />&nbsp; Productos y Servicios a agregar
                        </h2>
                    </Col>
                </Row>

                {/* Tabla Productos*/}
                {/* Titulo*/}
                <Row className='table-head'>
                    <Col>Selección</Col>
                    <Col>Imagen</Col>
                    <Col>Nombre</Col>
                    <Col>Descripción</Col>
                    <Col>Precio</Col>
                    <Col>Cantidad</Col>

                </Row>
                {/* Cuerpo*/}
                <div className="scroll">
                    {products.map(( elemento ) => (
                        <Row className='table-body'>
                            <Col>
                            <input type="checkbox" id="seleccion" value="seleccion"/>
                            </Col>
                            <Col> <img src={elemento.imagen} /> </Col>
                            <Col>{elemento.nombre} </Col>
                            <Col>{elemento.descrip}</Col>
                            <Col>$ {elemento.precio}</Col>
                            <Col sm={1}>
                                 <input className='form-control' name="cantidad" type="text" onChange={onChangeCantidad} placeholder={elemento.precio}/>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>
            
            <div className="boton-pago">
            {/* Botón realizar pago*/}
            <Row>
                <Col sm={11}>
                        <div className=' d-flex justify-content-end'>
                            <Button color="primary" href='#' ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Agregar Producto/Servicio</Button>
                        </div>
                </Col>
            </Row>
            </div>

        </>

    );

}

export default TablaAgregarProductos;