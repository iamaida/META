<<<<<<< HEAD
const moment = require('moment');

module.exports = (sequelize, type) =>{
    return sequelize.define('habitacion', {
    id_habitacion: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: type.STRING,
    descripcion: type.STRING,
    capacidad: type.INTEGER,
    precio_persona: type.INTEGER,
    imagen: type.STRING,
    cantidad_camas: type.INTEGER,
    estado:{
        type: type.BOOLEAN,
        defaultValue: false
    }
=======

module.exports = (sequelize, type) => {
    return sequelize.define('Habitacion', {
        id_habitacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: type.STRING,
            unique:true
        },
        capacidad: type.INTEGER,
        precio_persona: type.DOUBLE,
        imagen: type.STRING,
        cantidad_camas: type.INTEGER,
        estado: {
            type: type.BOOLEAN,
            defaultValue: true
        }
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
    })
}