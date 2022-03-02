const router = require('express').Router();
const { Cliente, sequelize } = require('../../database/db');
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op

const { response } = require('express');

//Registrar
router.post('/register', async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.json(cliente);
});

//Ver todos los registros activos
router.get('/', async (req, res) => {
    const clientes = await Cliente.findAll({
        where: {estado: true}
    });
    res.json(clientes)
});

//Ver todos los registros
router.get('/todos', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes)
});

router.get('/activos', async (req, res) => {
    const clientes_activos = await Cliente.findAll({
        where:{
            id_reserva:{
                [Op.in]: sequelize.literal(`(SELECT id_reserva FROM reservas WHERE estado=true)`)
            }
        }   
    });
    res.json(clientes_activos)
});

module.exports = router;