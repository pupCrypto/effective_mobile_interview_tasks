const express = require('express')
const logger = require('./middlewares/logging');
const fileUpload = require('express-fileupload');
const { ONE_MB } = require('./consts');

const middlewares = [
    fileUpload({ limits: { fileSize: ONE_MB }, abortOnLimit: true }),
    express.json(),
    logger,
];


module.exports = middlewares;
