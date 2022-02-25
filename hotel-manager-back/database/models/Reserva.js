const moment = require('moment');
<<<<<<< HEAD
const Habitacion = require('./Habitacion')

module.exports = (sequelize, type) =>{
    return sequelize.define('reserva', {
=======

module.exports = (sequelize, type) => {
    return sequelize.define('Reserva', {
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
        id_reserva: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_reserva: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_reserva')).format('YYYY-MM-DD');
            }
        },
        fecha_ingreso: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_ingreso')).format('YYYY-MM-DD');
            }
        },
        fecha_salida: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_salida')).format('YYYY-MM-DD');
            }
        },
<<<<<<< HEAD
        num_adultos: type.INTEGER,
        num_kids: type.INTEGER,
        estado:{
            type: type.BOOLEAN,
            defaultValue: true
        },
        id_habitacion:{
            type: type.INTEGER,
            References:{
                model: Habitacion,
                key: 'id_habitacion'
            }
=======
        estado: {
            type: type.BOOLEAN,
            defaultValue: true
        },
    
        id_habitacion:{ //Llave foranea
            type: type.INTEGER,
            foreignKey: true,
            allowNull: false
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
        }
    })
}