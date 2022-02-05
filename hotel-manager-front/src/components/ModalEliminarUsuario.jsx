import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalEliminarUsuario() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
        <Button variant="primary" onClick={handleShow}>
            Eliminar Usuario
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro de eliminar al usuario?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="danger" onClick={handleClose}>
            Aceptar
            </Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}
