const express = require('express');
const controllers = require('../controllers/profile');
const strictValidator = require('../middlewares/scrictValidator');
const authMiddleware = require('../middlewares/auth');
const errorHandler = require('../middlewares/baseErrorHandler');


const {
    editProfileSchema,
    getProfileSchema,
    getProfilesSchema
} = require('../schemas/req');
const router = express.Router();

router.put('/profiles/:userId', editProfileSchema, strictValidator, authMiddleware, errorHandler(controllers.editProfile));
router.get('/profiles/:userId', getProfileSchema, strictValidator, errorHandler(controllers.getProfile));
router.get('/profiles', getProfilesSchema, errorHandler(controllers.getProfiles));

module.exports = router;
