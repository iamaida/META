const router = require ('express').Router();

const middleware = require('./middlewares');
const apiUsersRouter = require('./api/user');
const apiHabitacionesRouter = require('./api/habitacion');
const apiReservasRouter = require('./api/reserva');

router.use('/users', apiUsersRouter);
router.use('/habitaciones', apiHabitacionesRouter);
router.use('/reservas', apiReservasRouter);

module.exports = router;