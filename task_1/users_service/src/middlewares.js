const express = require('express')
const logger = require('./middlewares/logging');

const middlewares = [
    express.json(),
    logger,
];


module.exports = middlewares;
