import React from 'react';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faPencilAlt, faTrashAlt, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../styles/VerUsuario.css';
import axios from 'axios';


var data = [];


class VerUsuario extends React.Component {
    
    state = {
        data: data,
        form:{
            id_usuario:"",
            tipo_documento:"",
            num_documento:"",
            nombre: "",
            apellido: "",
            genero:"",
            telefono: "",
            fecha_nacimiento: "",
            cargo:"",
            email:"",
            password:""
        },
        modalInsertar: false,
        modalEditar: false,
        modalEliminar: false,
        mappedData: [] //Donde se va a guardar la consulta
    
    };
handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value,
    }
    
});
console.log(this.state);

}

//funcion para activar el botion de insertar
mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
    
}

//funcion para activar el boton de cancelar
ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
}

//funcion para botton de editar
mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
}

//funcion para cerrar botton de editar
ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
}

//funcion para botton de eliminar
mostrarModalEliminar=(registro)=>{
    this.setState({modalEliminar: true, form: registro});
}

//funcion para cerrar botton de eliminar
ocultarModalEliminar=()=>{
    this.setState({modalEliminar: false});
}


//funncion para insertar datos dentro de la tabla
insertar=()=>{
    var valorNuevo={...this.state.form};
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
    this.insertarUsuario();
}


//Funcion que recibe datos de una lista 
editar=(dato)=>{
    var contador=0;
    var lista= this.state.data;
    lista.map((registro)=>{
        if(dato.tipo_documento===registro.tipo_documento){
            lista[contador].tipo_documento=dato.tipo_documento;
            lista[contador].num_documento=dato.num_documento;
            lista[contador].nombre=dato.nombre;
            lista[contador].apellido=dato.apellido;
            lista[contador].genero =dato.genero;
            lista[contador].telefono=dato.telefono;
            lista[contador].fecha_nacimiento=dato.fecha_nacimiento;
            lista[contador].cargo=dato.cargo;

        }
        contador++;
    });
    this.setState({data: lista, modalEditar: false});
    this.editarUsuario();
}

//funcion para eliminar
eliminar=(dato)=>{
    var contador=0;
    var lista= this.state.data;
    lista.map((registro) => {
        if(dato.id_usuario===registro.id_usuario){
            lista[contador].id_usuario=dato.id_usuario;
        }
        contador++;
    });
    this.setState({data: lista, modalEliminar:false})
    this.eliminarUsuario();
}

componentDidMount = () => {
    this.verUsuario();
}


getFetch = async (email) => {
    let baseUrl = "http://localhost:5000/api/users/edit/"

    if(email){
        baseUrl=baseUrl+email;
    }

    return await axios.get(baseUrl)
}

getUsers = () => {
    return this.getFetch();
}

getSpecifiedUser = (email) =>{
    return this.getFetch(email)
}



verUsuarioEspecifico = async () => {
    var lista=this.state.form
    const res = await axios.get(`http://localhost:5000/api/users/${lista.email}`);
    console.log(res.data)
}

verUsuario = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    data = res.data;
    this.setState({mappedData:res.data});
}

insertarUsuario = async () => {
    var lista=this.state.form;
    console.log(lista);
    try{
        const res = await axios.post('http://localhost:5000/api/users/register', {tipo_documento:lista.tipo_documento, num_documento:lista.num_documento,
        nombre:lista.nombre, apellido:lista.apellido, genero:lista.genero, fecha_nacimiento:lista.fecha_nacimiento, telefono:lista.telefono, cargo:lista.cargo, email:lista.email, password:lista.password});
        console.log(res.data);
        this.setState({lista:{}});
        this.componentDidMount();
    }catch(e){
        console.log(e)
    }
}

editarUsuario = async () => {
    var lista = this.state.form;
    console.log(lista)
    try{
        const res = await axios.put(`http://localhost:5000/api/users/edit/${lista.id_usuario}`,
        {tipo_documento:lista.tipo_documento, num_documento:lista.num_documento,
            nombre:lista.nombre, apellido:lista.apellido, genero:lista.genero, fecha_nacimiento:lista.fecha_nacimiento, telefono:lista.telefono, cargo:lista.cargo}
        )
        console.log(res.data);
        this.setState({lista:{}});
        this.componentDidMount();
        
    }catch(e){
        console.log(e);
    }
}

eliminarUsuario = async () => {
    var lista = this.state.form;
    console.log(lista);
    try{
        const res = await axios.put(`http://localhost:5000/api/users/edit/${lista.id_usuario}`,
        {estado:false})
        console.log(res.data);
        this.setState({lista:{}});
        this.componentDidMount();
    }catch(e){
        console.log(e);
    }
}

    render() {
        return (
            <>
                <Container className='usuario'>
                    <Row className='titulo-boton'>
                        <Col sm={8}>
                            <h2 className='titulo-principal'>
                            <FontAwesomeIcon icon={faUser} />&nbsp; Gestión de usuarios
                            </h2>
                        </Col>
                        <Col sm={4}>
                            <div className=' d-flex justify-content-end'>
                                <Button color="outline-success" onClick={()=>this.mostrarModalInsertar()}><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Nuevo Usuario</Button>
                            </div>
                        </Col>
                    </Row>

                    <Table className='tabla-usuarios'>
                        <thead className='table-head'>
                            <tr className='table-tr'>
                                <th>Tipo Doc.</th>
                                <th>Numero Doc.</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Genero</th>
                                <th>Telefono</th>
                                <th>Fecha Nac.</th>
                                <th>Cargo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mappedData.map((elemento) => (
                                <tr>
                                    <td>{elemento.tipo_documento}</td>
                                    <td>{elemento.num_documento}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.apellido}</td>
                                    <td>{elemento.genero}</td>
                                    <td>{elemento.telefono}</td>
                                    <td>{elemento.fecha_nacimiento}</td>
                                    <td>{elemento.cargo}</td>
                                    <td><Button color="outline-primary"onClick={()=>this.mostrarModalEditar(elemento)}> <FontAwesomeIcon icon={faPencilAlt} /> </Button>&nbsp;&nbsp;
                                        <Button color="outline-danger"onClick={()=>this.mostrarModalEliminar(elemento)}> <FontAwesomeIcon icon={faTrashAlt} /> </Button></td>

                                </tr>
                            ))}

                        </tbody>
                    </Table>

                </Container>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Registrar Cliente</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label> </label>

                            
                <select class="form-control" id="exampleFormControlSelect1" onChange={this.handleChange}>
                             <option selected value = "0" >Tipo de Documento</option>
                             <option>Cedula</option>
                             <option>Tarjeta de Identidad</option>
                             <option>Nit</option>
                            </select> 
                        </FormGroup>

                        <FormGroup>
                            <label>Numero Doc:</label>
                            <input

                                className='form-control'name="NumeroDoc" type="text" onChange={this.handleChange}/>

                              

                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input
                                className='form-control'name="nombre" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Apellidos:</label>
                            <input


                            className='form-control'name="apellidos" type="text" onChange={this.handleChange}/>

                            
                        </FormGroup>
                        <FormGroup>
                            <label>Genero:</label>
                            <input
                                className='form-control'name="genero" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Telefono:</label>
                            <input
                                className='form-control'name="telefono" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Nac.:</label>
                            <input
                            className='form-control' type ="date" id= "fecha de nacimiento" min="1930-01-01" max="2023-12-31"onChange={this.handleChange} ></input>
                                
                        </FormGroup>
                        <FormGroup>
                            <label>Cargo:</label>
                            <input
                                className='form-control'name="cargo" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Email:</label>
                            <input
                                className='form-control'name="email" type="email" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Constraseña:</label>
                            <input
                                className='form-control'name="password" type="password" onChange={this.handleChange}/>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary"onClick={()=>this.insertar()}>Insertar</Button>
                        <Button color="danger"onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                        
                    </ModalFooter>
                </Modal>
                
                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div><h3>Editar Cliente</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label> Tipo Doc:</label>

                            <input
                                className='form-control' name="tipo_documento" type="text" onChange={this.handleChange} value={this.state.form.tipo_documento}/>
                        </FormGroup>

                        <FormGroup>
                            <label>Numero Doc:</label>
                            <input
                                className='form-control'name="num_documento" type="text" onChange={this.handleChange} value={this.state.form.num_documento}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input
                                className='form-control'name="nombre" type="text" onChange={this.handleChange}value={this.state.form.nombre}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Apellidos:</label>
                            <input
                                className='form-control'name="apellido" type="text" onChange={this.handleChange} value={this.state.form.apellido}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Genero:</label>
                            <input
                                className='form-control'name="genero" type="text" onChange={this.handleChange}value={this.state.form.genero}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Telefono:</label>
                            <input
                                className='form-control'name="telefono" type="text" onChange={this.handleChange}value={this.state.form.telefono}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Fecha Nac.:</label>
                            <input
                                className='form-control'name="fecha_nacimiento" type="text" onChange={this.handleChange}value={this.state.form.fecha_nacimiento}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Cargo:</label>
                            <input
                                className='form-control'name="cargo" type="text" onChange={this.handleChange} value={this.state.form.cargo}/>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary"onClick={()=>this.editar(this.state.form)}>Editar</Button>
                        <Button color="danger"onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
                        
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalHeader>
                        <div><h3>Eliminar usuario</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        ¿Está seguro de eliminar el usuario?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" onClick={()=>this.ocultarModalEliminar()}>Cancelar</Button>
                        <Button color="primary" onClick={()=>this.eliminar()}>Aceptar</Button>
                        
                    </ModalFooter>
                </Modal>
            </>
            
            );

    }
}

export default VerUsuario;

