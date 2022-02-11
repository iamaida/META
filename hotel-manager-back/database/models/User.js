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
        fecha_nacimiento: type.DATE,
        cargo: type.STRING,
        email: type.STRING,
        password: type.STRING,
        estado: {
            type: type.BOOLEAN,
            defaultValue: true
        }
    })
}