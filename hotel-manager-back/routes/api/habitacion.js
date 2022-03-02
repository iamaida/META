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
router.get('/disponibles/:capacidad/:fecha_ingreso/:fecha_salida', async (req, res) => {
    const habitaciones_dispo = await Habitacion.findAll({
        where:{
            [Op.and]: [
                {capacidad:{
                    [Op.gte]: [parseInt(req.params.capacidad)]
                }},
                {id_habitacion:{
                    [Op.notIn]: sequelize.literal(`(SELECT id_habitacion FROM reservas WHERE fecha_ingreso='${req.params.fecha_ingreso}' AND fecha_salida='${req.params.fecha_salida}')`)
                }}
            ]
        }   
    });
    res.json(habitaciones_dispo)
});

//Ver habitación específica
router.get('/habitacion/:id_habitacion', async (req, res) => {
    const habitacion = await Habitacion.findAll({
        where:{id_habitacion:req.params.id_habitacion}
    });
    res.json(habitacion)
});

module.exports = router;