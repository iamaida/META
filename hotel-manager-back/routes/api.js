const router = require ('express').Router();

const middleware = require('./middlewares');
const apiUsersRouter = require('./api/user');

router.use('/users', apiUsersRouter);

module.exports = router;