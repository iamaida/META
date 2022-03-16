<<<<<<< HEAD
import React, { useState,useEffect } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
//import SeleccionardorFechaReserva from "./SeleccionadorFechaReserva";
import '../../../styles/modificarReserva.css';
import Cookies from "universal-cookie/es6";
import axios from "axios";


const FormularioModificarReservacion = () => {

    const [id_reserva, setId_reserva] = useState('');
    const [fecha_ingreso, setFecha_ingreso] = useState('');
    const [fecha_salida, setFecha_salida] = useState('');
    const [fecha_actual, setFecha_actual] = useState('');
    const [num_adultos, setNum_adultos] = useState('');
    const [num_kids, setNum_kids] = useState('');
    const cantidad_huespedes=[1,2,3,4,5,6]
    var fecha_min_1='';
    var fecha_min_2='';
    var fecha_max_1='';
    var fecha_max_2='';
=======
import React , { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
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
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830

    const onChangeFecha_ingreso = (e) => {
        setFecha_ingreso(e.currentTarget.value);
        console.log(fecha_ingreso);
    };

    const onChangeFecha_salida = (e) => {
        setFecha_salida(e.currentTarget.value);
        console.log(fecha_salida);
    };

<<<<<<< HEAD
    const onChangeNum_adultos = (e) => {
        setNum_adultos(e.currentTarget.value);
        console.log(num_adultos);
    };

    const onChangeNum_kids = (e) => {
        setNum_kids(e.currentTarget.value);
        console.log(num_kids);
    };
    
    const enviarDatos = (e) => {
        e.preventDefault();
    }

    useEffect(()=> {
        const cookie = new Cookies();
        const datos = cookie.get('infoReservaCliente')[0];
        setId_reserva(datos['id_reserva']);
        setFecha_ingreso(datos['fecha_ingreso']);
        setFecha_salida(datos['fecha_salida']);
        setNum_adultos(datos['num_adultos']);
        setNum_kids(datos['num_kids']);
        console.log(datos);

        const obtenerFechaActual = () => {
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
             return `${anio}-${mes}-${dia}`
          }

        setFecha_actual(obtenerFechaActual());
    },[])
=======
    const onChangeCantidad_adultos = (e) => {
        setCantidad_adultos(e.currentTarget.value);
        console.log(cantidad_adultos);
    };

    const onChangeCantidad_kids = (e) => {
        setCantidad_kids(e.currentTarget.value);
        console.log(cantidad_kids);
    };
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830

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

<<<<<<< HEAD
        fecha_min_1=`${anio}-${mes}-${dia}`;
        fecha_max_1=`${anio_max}-${mes}-${dia}`;

        fecha_min_2=fecha_ingreso.split('-');
        fecha_min_2[2]=parseInt(fecha_min_2[2])+1;
        fecha_min_2[2]=String(fecha_min_2[2])
        if(fecha_min_2[2].length===1){
            fecha_min_2[2]='0'+fecha_min_2[2];    
        }
        fecha_min_2=fecha_min_2[0]+'-'+fecha_min_2[1]+'-'+fecha_min_2[2]

        fecha_max_2=fecha_ingreso.split('-');
        fecha_max_2[1]=parseInt(fecha_max_2[1])+1;
        fecha_max_2[1]=String(fecha_max_2[1]);
        if(fecha_max_2[1].length===1){
            fecha_max_2[1]='0'+fecha_max_2[1];
        }
        fecha_max_2=fecha_max_2[0]+'-'+fecha_max_2[1]+'-'+fecha_max_2[2];        
      }
    fechas();

    const modificarReserva = async () => {
        const res = await axios.put(`http://localhost:5000/api/reservas/edit/${id_reserva}`,
        { fecha_reserva:fecha_actual, fecha_ingreso:fecha_ingreso, fecha_salida:fecha_salida,
          num_adultos:num_adultos, num_kids:num_kids})
        console.log(res.data);
    }

    const realizarConsulta = () => {
        console.log('click');
        modificarReserva();
    }

    return(    
=======
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
            
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830
          <div className='form-style'>   
            <React.Fragment>
                    <left><h4>Modificar Reservación</h4></left>
            </React.Fragment>
        <Form onSubmit={enviarDatos}>
            <Row>  
                <Col>
                    <Form.Group className="mb-3" controlId="fecha_ingreso">
                    <Form.Label>Fecha Ingreso</Form.Label>
<<<<<<< HEAD
                    <Form.Control type="date" placeholder="Fecha de ingreso" name='fecha_ingreso' value={fecha_ingreso} min={fecha_min_1} max={fecha_max_1} onChange={onChangeFecha_ingreso}/>
                    {/*<SeleccionardorFechaReserva tipo_fecha={'fecha_ingreso'}/>*/}
=======
                    <Form.Control type="date" placeholder="Fecha de ingreso" name='fecha_ingreso' min={fecha_min} max={fecha_max} onChange={onChangeFecha_ingreso}/>
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830
                    </Form.Group>
                    
                </Col>
               
                <Col>
<<<<<<< HEAD
                    <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                        <Form.Label>Fecha Salida</Form.Label>
                        <Form.Control type="date" placeholder="Fecha de salida" name='fecha_salida' value={fecha_salida} min={fecha_min_2} max={fecha_max_2} onChange={onChangeFecha_salida}/>
                        {/*<SeleccionardorFechaReserva tipo_fecha={'fecha_salida'}/>*/}
=======
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
                    <Form.Label>Fecha Salida</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de salida" name='fecha_salida' min={fecha_min} max={fecha_max} onChange={onChangeFecha_salida}/>
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830
                    </Form.Group>
                </Col>
            
            </Row>

            <Row>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
<<<<<<< HEAD
                    <Form.Label>Adultos (+13)</Form.Label>
                    <Form.Select value={num_adultos} name='cantidad_kids' onChange={onChangeNum_adultos}>
                        <option>Seleccione</option>
                        {cantidad_huespedes.map((num) => (
                            <option key={num}>{num}</option>
                        ))}
=======
                    <Form.Label> Cantidad Adultos </Form.Label>
                    <Form.Select name='cantidad_adultos' onChange={onChangeCantidad_adultos}>
                        <option>{cantidad_adultos}</option>
                        {validarCantidadHuespedes(cantidad_adultos).map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830
                    </Form.Select>
                    </Form.Group>
                </Col>
                
                <Col>
                <Form.Group className="mb-3" controlId="formBasicTipoDocumento">
<<<<<<< HEAD
                    <Form.Label>Menores</Form.Label>
                    <Form.Select value={num_kids} name='num_kids' onChange={onChangeNum_kids}>
                        <option>Seleccione</option>
                        {cantidad_huespedes.map((num) => (
                            <option key={num}>{num}</option>
                        ))}
=======
                    <Form.Label >Cantidad Niños</Form.Label>
                    <Form.Select name='cantidad_kids' onChange={onChangeCantidad_kids}>
                        <option>{cantidad_kids}</option>
                        {validarCantidadHuespedes(cantidad_kids).map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
>>>>>>> c7675bed6b2ec540a0021432d5607e1fb64de830
                    </Form.Select>
                    </Form.Group>
                </Col>
            
            </Row>
            <Row>
                <Col md="10"></Col>
                <Col >
                <Button variant="primary" onClick={()=>realizarConsulta()}>Guardar</Button>
                </Col>
            </Row>
        </Form>
        </div> 
        
    );

}

export default FormularioModificarReservacion;