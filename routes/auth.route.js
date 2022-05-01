const router = require('express').Router();
const authController = require('../controller/auth.controller')
const authMiddleWare = require('../middlewares/auth.middleware')

router.post('/login', authMiddleWare.validateLogin, authController.postLogin);

router.get('/login', authController.login);

module.exports = router;