import React , { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import SeleccionardorFechaReserva from "./SeleccionadorFechaReserva";
import axios from 'axios';
import '../../styles/modificarReserva.css';

const FormularioModificarReservacion = () => {

    const [fecha_ingreso, setFecha_ingreso] = useState('');
    const [fecha_salida, setFecha_salida] = useState('');
    const [cantidad_adultos, setCantidad_adultos] = useState('3');
    const [cantidad_kids, setCantidad_kids] = useState('6');
    const [capacidad, setCapacidad] = useState('');
    const cantidad_huespedes=[1,2,3,4,5,6]

    var fecha_min='';
    var fecha_max='';

    const onChangeFecha_ingreso = (e) => {
        setFecha_ingreso(e.currentTarget.value);
        console.log(fecha_ingreso);
    };

    const onChangeFecha_salida = (e) => {
        setFecha_salida(e.currentTarget.value);
        console.log(fecha_salida);
    };

    const onChangeCantidad_adultos = (e) => {
        setCantidad_adultos(e.currentTarget.value);
        console.log(cantidad_adultos);
    };

    const onChangeCantidad_kids = (e) => {
        setCantidad_kids(e.currentTarget.value);
        console.log(cantidad_kids);
    };

    const fechas = () => {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        var anio = String(hoy.getFullYear())
        var mes = String(hoy.getMonth()+1)
        var dia = String(hoy.getDate())
      
        if(mes.length===1){
            mes='0'+mes
        }
        if(dia.length===1){
            dia='0'+dia
        }

        const anio_max=String(parseInt(anio)+1)

        fecha_min=`${anio}-${mes}-${dia}`
        fecha_max=`${anio_max}-${mes}-${dia}`
      }

    fechas()
    
    const validarCantidadHuespedes= (cantidad_personas) => {
        let copia_cantidad_huespedes = cantidad_huespedes.slice()
        for (let i = 0; i < copia_cantidad_huespedes.length; i++) {
                if(cantidad_personas == copia_cantidad_huespedes[i] ){
                    copia_cantidad_huespedes.splice(i, 1); 
                }
          }
        return copia_cantidad_huespedes;
    };


    return(
            
          <div className='form-style'>   
            <React.Fragment>
                    <left><h4>MODIFICAR RESERVACIÓN</h4></left>
            </React.Fragment>
            
        <Form>
        
            <Row>
                
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Fecha Ingreso</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de ingreso" name='fecha_ingreso' min={fecha_min} max={fecha_max} onChange={onChangeFecha_ingreso}/>
                    </Form.Group>
                    
                </Col>
               
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Fecha Salida</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de salida" name='fecha_salida' min={fecha_min} max={fecha_max} onChange={onChangeFecha_salida}/>
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label> Cantidad Adultos </Form.Label>
                    <Form.Select name='cantidad_adultos' onChange={onChangeCantidad_adultos}>
                        <option>{cantidad_adultos}</option>
                        {validarCantidadHuespedes(cantidad_adultos).map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                    </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label >Cantidad Niños</Form.Label>
                    <Form.Select name='cantidad_kids' onChange={onChangeCantidad_kids}>
                        <option>{cantidad_kids}</option>
                        {validarCantidadHuespedes(cantidad_kids).map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                    </Form.Select>
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

export default FormularioModificarReservacion;