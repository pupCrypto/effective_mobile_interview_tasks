const { validationResult } = require('express-validator');


function strictValidatorMiddleware(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    res.status(400);
    return res.json({errors: errors.errors});
}


module.exports = strictValidatorMiddleware;
