const jwtUtils = require('../utils/jwt');
const User = require('../models/user');

class Auth {
    constructor(accessToken) {
        this._accessToken = accessToken;
        this._user = undefined;
    }
    get user() {
        return this._user;
    }
    async authenticate() {
        const payload = jwtUtils.decodeJwtToken(this._accessToken);
        this._user = await User.findOne({ where: { id: payload.userId } });
    }
}

module.exports = Auth;
