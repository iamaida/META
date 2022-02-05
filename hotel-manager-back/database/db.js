const { Sequelize } = require('sequelize');
const { database } = require('../config');
const UserModel = require('./models/User');
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "postgresql"
    }
);

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas sincronizadas')
})


module.exports = {
    User
}