import React from "react";
import {Tabs, Tab} from 'react-bootstrap';
import FormularioModificarReservacion from '../components/FormularioModificarReservacion';
import FormularioModificarInfoCliente from '../components/FormularioModificarInfoCliente';

export default function TabsModificarReserva() {

    return (
        <Tabs
            defaultActiveKey="info-reserva"
            transition={true}
            id="noanim-tab-example"
            className="mb-3"
        >
            <Tab eventKey="info-reserva" title="Información reserva">
                <FormularioModificarReservacion/>
            </Tab>
            <Tab eventKey="profile" title="Información Cliente">
            <FormularioModificarInfoCliente/>
            </Tab>
        </Tabs>

    )
}
