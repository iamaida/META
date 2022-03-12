const router = require('express').Router();
const { Reserva } = require('../../database/db');

const { response } = require('express');

//Registrar
router.post('/register', async (req, res) => {
    const reserva = await Reserva.create(req.body);
    res.json(reserva);
});

//Ver todos los registros
router.get('/', async (req, res) => {
    const reservas = await Reserva.findAll();
    res.json(reservas)
});

//Obtener registro especifico de reserva
router.get('/:id_reserva', async (req, res) => {
    const reserva = await Reserva.findAll({
        where:{id_reserva:req.params.id_reserva}
    });
    res.json(reserva)
})

//Obtener el id del ultimo elemento insertado
router.get('/lastid', async(req, res) => {
    const id_reserva = await Reserva.max('id_reserva')
    res.json(id_reserva)
})


module.exports = router;