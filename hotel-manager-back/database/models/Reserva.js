const moment = require('moment');

module.exports = (sequelize, type) => {
    return sequelize.define('Reserva', {
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
        estado: {
            type: type.BOOLEAN,
            defaultValue: true
        },
    
        id_habitacion:{ //Llave foranea
            type: type.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    })
}