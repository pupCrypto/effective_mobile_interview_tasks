const { STATUS, RES_MSG } = require('../consts');
const Auth = require('../services/auth');

async function authMiddleware(req, res, next) {
    req.auth = new Auth(req.headers.authorization);
    
    try {
        await req.auth.authenticate();
    } catch {
        res.status(403);
        res.json({status: STATUS.ERROR, msg: RES_MSG.TOKEN_EXPIRED});
        return;
    }
    next();
}

module.exports = authMiddleware;
