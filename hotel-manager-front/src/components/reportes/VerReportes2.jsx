import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function VerReportes2() {

    const [donde_viene, setDonde_viene] = useState('');
    const [cantidad, setCantidad] = useState('');

    useEffect(()=> {
    
        const obtenerDatos = async () => {
            const res = await axios.get('http://localhost:5000/api/clientes/reporte')
            console.log(res.data);
            const respuesta = res.data

            const auxCantidad = respuesta.map(elemento => {
                return elemento.cantidad
            })
            const auxDonde_viene = respuesta.map(elemento => {
                return elemento.donde_viene
            })
            setCantidad(auxCantidad);
            setDonde_viene(auxDonde_viene);     
            console.log(auxCantidad, auxDonde_viene)
        }

        obtenerDatos();
        
    },[])

    const data={
        labels: donde_viene,
        datasets: [{
            label: 'Cantidad',
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor:'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data: cantidad
        }]
    };

    const opciones={
        maintainAspectRatio: false,
        responsive: true
    }

  return (
    <div style={{width:'100%', height:'500px'}}>
        <h2>Ciudades de proveniencia de clientes</h2>
        <Bar data={data} options={opciones} />
    </div>
  )
}
