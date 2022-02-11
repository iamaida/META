import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import axios from 'axios';


var data = [];


class VerUsuario extends React.Component {
    
    state = {
        data: data,
        form:{
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
}

//funcion para eliminar

eliminar=(dato)=>{
    var opcion=window.confirm("Deseas eliminar este usuario ");
    if(opcion){ 
        var contador=0;
        var lista= this.state.data;
        lista.map((registro)=>{
            if(registro.TipoDoc===dato.TipoDoc){
                lista.splice(contador, 1);
            }
            contador++;
        })
        this.setState({data: lista});
    }
}

componentDidMount = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    data = res.data;
    this.setState({mappedData:res.data});
}

insertarUsuario = async () => {
    var lista=this.state.form;
    console.log(lista);
    try{
        const res = await axios.post('http://localhost:5000/api/users/register', {tipo_documento:lista.tipo_documento, num_documento:lista.num_documento,
        nombre:lista.nombre, apellido:lista.apellido, genero:lista.genero, fecha_nacimiento:lista.fecha_nacimiento, cargo:lista.cargo, email:lista.email, password:'1234'});
        //const res = await axios.post('http://localhost:5000/api/users/register', {tipo_documento:'C.C.', num_documento:'957775886', nombre:'Ejemplo4', apellido:'Ejemplo4', genero:'Masculino', telefono:'985448510', fecha_nacimiento:'2000-08-07', cargo:'Recepcionista', email:'ejemplo4@ejemplo4.com', password:'1234'});
        console.log(res.data);
        this.setState({lista:{}});
    }catch(e){
        console.log(e)
    }
}

    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Ingresar nuevo usuarios</Button>
                    <br /><br />

                    <Table>
                        <thead><tr><th>Tipo Doc.</th>
                            <th>Numero Doc.</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Genero</th>
                            <th>Telefono</th>
                            <th>Fecha Nac.</th>
                            <th>Cargo</th>
                            <th>Acciones</th></tr></thead>
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
                                    <td><Button color="primary"onClick={()=>this.mostrarModalEditar(elemento)}>Editar </Button>&nbsp;&nbsp;
                                        <Button color="danger"onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>

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
                            <label> Tipo Doc:</label>

                            <input
                                className='form-control' name="tipo_documento" type="text" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <label>Numero Doc:</label>
                            <input
                                className='form-control'name="num_documento" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input
                                className='form-control'name="nombre" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Apellidos:</label>
                            <input
                                className='form-control'name="apellido" type="text" onChange={this.handleChange}/>
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
                                className='form-control'name="fecha_nacimiento" type="text" onChange={this.handleChange}/>
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
            </>
            
            );

    }
}

export default VerUsuario;