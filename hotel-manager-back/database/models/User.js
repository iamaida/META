const moment = require('moment');

module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_documento: type.STRING,
        num_documento: type.STRING,
        nombre: type.STRING,
        apellido: type.STRING,
        genero: type.STRING,
        telefono: type.STRING,
        fecha_nacimiento: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_nacimiento')).format('YYYY-MM-DD');
      }
        },
        cargo: type.STRING,
        email: type.STRING,
        password: type.STRING,
        estado: {
            type: type.BOOLEAN,
            defaultValue: true
        }
    })
}