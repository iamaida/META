import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';


const data = [
    { TipoDoc: 'cc', NumeroDoc: 1830957, nombre: 'Eduardo', apellidos: 'Daza', genero: 'Masculino', telefono: 3107735496, FechaNacimiento: "20/02/2021", cargo: "administrador" },
    
    
];

class VerUsuario extends React.Component {
    state = {
        data: data,
        form:{
            TipoDoc:"",
            NumeroDoc:"",
            nombre: "",
            apellidos: "",
            genero:"",
            telefono: "",
            FechaNacimiento: "",
            cargo:""
        },
        modalInsertar: false,
        modalEditar: false,
    
    };
handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value,
    }
});
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
}


//Funcion que recibe datos de una lista 
editar=(dato)=>{
    var contador=0;
    var lista= this.state.data;
    lista.map((registro)=>{
        if(dato.TipoDoc==registro.TipoDoc){
            lista[contador].NumeroDoc=dato.NumeroDoc;
            lista[contador].nombre=dato.nombre;
            lista[contador].apellidos=dato.apellidos;
            lista[contador].genero =dato.genero;
            lista[contador].telefono=dato.telefono;
            lista[contador].FechaNacimiento=dato.FechaNacimiento;
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
            if(registro.TipoDoc==dato.TipoDoc){
                lista.splice(contador, 1);
            }
            contador++;
        })
        this.setState({data: lista});
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
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.TipoDoc}</td>
                                    <td>{elemento.NumeroDoc}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.apellidos}</td>
                                    <td>{elemento.genero}</td>
                                    <td>{elemento.telefono}</td>
                                    <td>{elemento.FechaNacimiento}</td>
                                    <td>{elemento.cargo}</td>
                                    <td><Button color="primary"onClick={()=>this.mostrarModalEditar(elemento)}>Editar </Button>{"  "}
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
                                className='form-control' name="TipoDoc" type="text" onChange={this.handleChange} />
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
                                className='form-control'name="FechaNacimiento" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Cargo:</label>
                            <input
                                className='form-control'name="cargo" type="text" onChange={this.handleChange}/>
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
                                className='form-control' name="tipoDoc" type="text" onChange={this.handleChange} value={this.state.form.TipoDoc}/>
                        </FormGroup>

                        <FormGroup>
                            <label>Numero Doc:</label>
                            <input
                                className='form-control'name="numeroDoc." type="text" onChange={this.handleChange} value={this.state.form.NumeroDoc}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input
                                className='form-control'name="nombre" type="text" onChange={this.handleChange}value={this.state.form.nombre}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Apellidos:</label>
                            <input
                                className='form-control'name="apellidos." type="text" onChange={this.handleChange} value={this.state.form.apellidos}/>
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
                                className='form-control'name="fechaNac." type="text" onChange={this.handleChange}value={this.state.form.FechaNacimiento}/>
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