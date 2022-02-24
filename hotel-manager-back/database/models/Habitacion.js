
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
    })
}