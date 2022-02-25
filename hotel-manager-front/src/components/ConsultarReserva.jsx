import React, { useState } from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../styles/consultarReservas.css';

export default function ConsultarReserva() {

    const [fecha_ingreso, setFecha_ingreso] = useState('');
    const [fecha_salida, setFecha_salida] = useState('');
    const [cantidad_adultos, setCantidad_adultos] = useState('1');
    const [cantidad_kids, setCantidad_kids] = useState('1');
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

    const consultarHabitacionesDisponibles = async () => {
        setCapacidad(parseInt(cantidad_adultos)+parseInt(cantidad_kids))
        console.log(capacidad, fecha_ingreso)
        const res = await axios.get('http://localhost:5000/api/habitaciones/disponibles',
        {capacidad:2, fecha_ingreso:'2022-02-24'});
        console.log(res.data);
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        consultarHabitacionesDisponibles();
    }

    const consultar = () =>{
        console.log('Click');
        consultarHabitacionesDisponibles();
    }


  return (
    <Card className='consulta' style={{ width: '30rem' }}>
        <h3 className='consulta-body'>Hacer Reservación</h3>
        <Card.Body className='consulta-body'>
            <Form className='form-consulta-reserva' onSubmit={enviarDatos}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Fecha de ingreso</Form.Label>
                            <Form.Control type="date" placeholder="Fecha de ingreso" name='fecha_ingreso' min={fecha_min} max={fecha_max} onChange={onChangeFecha_ingreso}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cantidad Adultos</Form.Label>
                            <Form.Select name='cantidad_adultos' onChange={onChangeCantidad_adultos}>
                                {cantidad_huespedes.map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Fecha de salida</Form.Label>
                            <Form.Control type="date" placeholder="Fecha de salida" name='fecha_salida' min={fecha_min} max={fecha_max} onChange={onChangeFecha_salida}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cantidad Niños</Form.Label>
                            <Form.Select name='cantidad_kids' onChange={onChangeCantidad_kids}>
                                {cantidad_huespedes.map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            <Button variant="primary" type="submit" onClick={()=>consultar()}>
                Consultar
            </Button>
        </Form>
        </Card.Body>
        </Card> 
  )
}
