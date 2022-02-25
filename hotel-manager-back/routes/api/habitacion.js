const router = require('express').Router();
const { Habitacion, sequelize } = require('../../database/db');
const { response } = require('express');
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op

//Registrar
router.post('/register', async (req, res) => {
    const habitacion = await Habitacion.create(req.body);
    res.json(habitacion);
});

//Ver habitaciones
router.get('/', async (req, res) => {
    const habitaciones = await Habitacion.findAll();
    res.json(habitaciones)
});

//Ver habitaciones disponibles
/*router.get('/disponibles', async (req, res) => {
    const habitaciones_dispo = await Habitacion.findAll({
        attributes:{
            include: [
                [
                    sequelize.literal(`(SELECT id_habitacion, nombre, capacidad FROM habitacions WHERE capacidad >=${req.body.capacidad} AND id_habitacion not in (SELECT id_habitacion FROM reservas WHERE fecha_ingreso='${req.body.fecha_ingreso}'))`)                    
                ]
            ]
        }
    });
    res.json(habitaciones_dispo)
});*/

router.get('/disponibles', async (req, res) => {
    const habitaciones_dispo = await Habitacion.findAll({
        where:{
            [Op.and]: [
                {capacidad:{
                    [Op.gte]: [parseInt(req.body.capacidad)]
                }},
                {id_habitacion:{
                    [Op.notIn]: sequelize.literal(`(SELECT id_habitacion FROM reservas WHERE fecha_ingreso='${req.body.fecha_ingreso}')`)
                }}
            ]
        }
            
    });
    res.json(habitaciones_dispo)
});

module.exports = router;