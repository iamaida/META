const { Sequelize } = require('sequelize');
const { database } = require('../config');
const UserModel = require('./models/User');
<<<<<<< HEAD
=======
const ClienteModel = require('./models/Cliente');
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
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
<<<<<<< HEAD
=======
const Cliente = ClienteModel(sequelize, Sequelize);

//Definición relaciones entre tablas
//Relación uno a uno
Reserva.belongsTo(Habitacion,{foreignKey: "id_habitacion"})
Habitacion.hasOne(Reserva,{foreignKey: "id_habitacion"})

//Relación uno a muchos
Cliente.belongsTo(Reserva,{foreignKey: "id_reserva"})
Reserva.hasMany(Cliente,{foreignKey: "id_reserva"})


>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas sincronizadas')
})


module.exports = {
<<<<<<< HEAD
    sequelize, User, Habitacion, Reserva
=======
    User,
    Habitacion,
    Reserva,
    Cliente
>>>>>>> 1ffc55af8fadc04bf825e233ff4dfab1667f6ae5
}