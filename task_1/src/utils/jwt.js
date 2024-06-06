const jwt = require('jsonwebtoken');
const CONFIG = require('../config');
const { getNowTimestamp } = require('./general');

function hasIat(payload) {
    return payload.hasOwnProperty('iat');
}

function hasExp(payload) {
    return payload.hasOwnProperty('exp');
}

function genJwtToken(payload) {
    if (!hasIat(payload)) {
        payload.iat = getNowTimestamp();
    }
    if (!hasExp(payload)) {
        payload.exp = getNowTimestamp() + CONFIG.ACCESS_TOKEN_LIFETIME_SECS;
    }
    return jwt.sign(payload, CONFIG.SECRET_KEY, { algorithm: 'HS256' });
}
function decodeJwtToken(token) {
    return jwt.verify(token, CONFIG.SECRET_KEY);
}


module.exports = {
    genJwtToken,
    decodeJwtToken,
};
