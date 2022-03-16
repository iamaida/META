const router = require ('express').Router();

const middleware = require('./middlewares');
const apiUsersRouter = require('./api/user');
const apiHabitacionesRouter = require('./api/habitacion');
const apiReservasRouter = require('./api/reserva');
const apiClientesRouter = require('./api/cliente');
const apiReportesRouter = require('./api/reportes');


router.use('/users', apiUsersRouter);
router.use('/habitaciones', apiHabitacionesRouter);
router.use('/reservas', apiReservasRouter);
router.use('/clientes', apiClientesRouter);
router.use('/reportes', apiReportesRouter);


module.exports = router;