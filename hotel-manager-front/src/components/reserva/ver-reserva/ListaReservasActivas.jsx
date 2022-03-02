import React, { useState, useEffect } from 'react'
import { ListGroup, Card } from 'react-bootstrap';
import '../../../styles/reservas/listaReservasActivas.css';
import axios from 'axios';

export default function ListaReservasActivas() {

  const [clientes_activos, setClientes_activos] = useState([]);

  useEffect(()=> {
    const clientesActivos = async () => {
      const res = await axios.get(`http://localhost:5000/api/clientes/activos`);
      console.log(res.data);
      setClientes_activos(res.data);
    }
    clientesActivos();
  },[])

  

  return (
    <div className='lista'>

      <Card className='card-lista'>
        <Card.Body>
          <Card.Title className='titulo-lista'>Reservas Activas</Card.Title>
          <ListGroup>
          {clientes_activos.map(({id_cliente, id_reserva, nombre, apellido})=> (
            <div key={id_cliente} className='lista-reservas'>
              <ListGroup.Item action href='/usuarios'>Reserva #{id_reserva}, {nombre} {apellido}</ListGroup.Item>
            </div>  
          ))}
          </ListGroup>
      </Card.Body>
      </Card>
    </div>
  )
}
