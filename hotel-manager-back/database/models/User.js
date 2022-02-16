module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_documento: type.STRING,
        num_documento:{
            type: type.STRING,
            unique:true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        genero: type.STRING,
        telefono: type.STRING,
        fecha_nacimiento: type.DATE,
        cargo: type.STRING,
        email: {
            type: type.STRING,
            unique: true
        },
        password: type.STRING,
        estado: type.BOOLEAN
    })
}