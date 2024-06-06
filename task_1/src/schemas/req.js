const { checkSchema } = require('express-validator');
const { getEnumValues } = require('../utils/general');
const { GENDER } = require('../consts');

function checkPage(value, { req }) {
    req.query.page = Number(value) || 1;
}

const registerUserSchema = checkSchema({
    email: { isEmail: true, notEmpty: true },
    firstName: { isLength: { options: {max: 32 } }, notEmpty: true },
    password: { isLength: { options: { min: 8 } }, notEmpty: true },
}, ['body']);

const loginUserSchema = checkSchema({
    email: { isEmail: true },
    password: { isLength: { options: { min: 8 } } },
}, ['body']);

const editProfileSchema = checkSchema({
    userId: { isInt: true, notEmpty: true },
    email: { isEmail: true, optional: true },
    firstName: { isLength: { options: {max: 32 } }, optional: true },
    lastName: { isLength: { options: {max: 32 } }, optional: true },
    gender: { isIn: { options: [ ...getEnumValues(GENDER) ] }},
    photo: { optional: true },
    authorization: { notEmpty: true, isJWT: true }
}, ['params', 'body', 'headers']);

const getProfileSchema = checkSchema({
    userId: { isInt: true, notEmpty: true }
}, ['params']);

const getProfilesSchema = checkSchema({
    page: { isInt: true, notEmpty: true, custom: { options: checkPage } }
}, ['query']);

module.exports = {
    registerUserSchema,
    loginUserSchema,
    editProfileSchema,
    getProfileSchema,
    getProfilesSchema,
};