import React, { useState } from "react";
import { Form, Row, Col, Container } from 'react-bootstrap';
import { Button} from 'reactstrap';
import axios from 'axios';
import '../../styles/moduloInventario.css';


const FormularioRegistrarProducto = () => {

    const [nombre, setNombre] = useState('');
    const [descrip, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [modalModificar, setModalModificar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [producto, setProducto] = useState( {
        id:" ",
        nombre: "",
        descrip: "",
        imagen: "",
        precio: "",
        cantidad:"" 
    })

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


    return (
        
        <div className='principal-formulario'>
        
        <div className= 'registro-producto-title'>
        <React.Fragment>
            <left><h2>Registrar Producto</h2></left>
        </React.Fragment>
        </div>

        <div className="principal-registrar-producto">
        <div className='form-style'>
        <Form >
                        <Row>
                            <Col>
                                <img src={producto.imagen} />
                            </Col>
                            <Col>
                                
                                <Button color="secondary">Seleccionar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>

                                    <label>Nombre</label>
                                    <input className='form-control' name="nombre" type="text" value={producto.nombre} onChange={onChangeNombre} />

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>

                                    <label>Descripción</label>
                                    <input className='form-control' name="descrip" type="text" onChange={onChangeDescripcion} value={producto.descrip}/>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>

                                    <label>Precio</label>
                                    <input className='form-control' name="precio" type="numeric" onChange={onChangePrecio} value={producto.precio} />

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="numeric" onChange={onChangeCantidad}  value={producto.cantidad}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    
            </div>
            </div>  
                <div className="boton-registro">
                    <Row>
                    <Col sm={11}>
                        <Button color="primary" >Guardar</Button>
                    </Col>
                    </Row>
                </div>        
            </div> 
    );

}




export default FormularioRegistrarProducto;