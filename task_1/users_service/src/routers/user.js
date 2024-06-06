const express = require('express');
const controllers = require('../controllers/user');
const strictValidator = require('../middlewares/scrictValidator');
const errorHandler = require('../middlewares/baseErrorHandler');

const {
    registerUserSchema,
    loginUserSchema,
} = require('../schemas/req');
const router = express.Router();

router.post('/user/register', registerUserSchema, strictValidator, errorHandler(controllers.registerUser));
router.post('/user/login', loginUserSchema, strictValidator, errorHandler(controllers.loginUser));

module.exports = router;
