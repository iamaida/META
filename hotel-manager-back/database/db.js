const { Sequelize } = require('sequelize');
const { database } = require('../config');
const UserModel = require('./models/User');
const ClienteModel = require('./models/Cliente');
const HabitacionModel = require('./models/Habitacion');
const ReservaModel = require('./models/Reserva');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "postgresql"
    }
);


const User = UserModel(sequelize, Sequelize);
const Habitacion = HabitacionModel(sequelize, Sequelize);
const Reserva = ReservaModel(sequelize, Sequelize);
const Cliente = ClienteModel(sequelize, Sequelize);

//Definición relaciones entre tablas
//Relación uno a uno
Reserva.belongsTo(Habitacion,{foreignKey: "id_habitacion"})
Habitacion.hasOne(Reserva,{foreignKey: "id_habitacion"})

//Relación uno a muchos
Cliente.belongsTo(Reserva,{foreignKey: "id_reserva"})
Reserva.hasMany(Cliente,{foreignKey: "id_reserva"})



sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas sincronizadas')
})


module.exports = {
    User,
    Habitacion,
    Reserva,
    Cliente
}