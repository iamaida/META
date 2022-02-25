const router = require('express').Router();
const { Reserva } = require('../../database/db');

const { response } = require('express');

//Registrar
router.post('/register', async (req, res) => {
    const reserva = await Reserva.create(req.body);
    res.json(reserva);
});

//Ver
router.get('/', async (req, res) => {
    const reservas = await Reserva.findAll();
    res.json(reservas)
});


module.exports = router;