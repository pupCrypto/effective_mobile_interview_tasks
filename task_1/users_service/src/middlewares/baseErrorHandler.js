const { RES_MSG } = require('../consts');

const errorHandler = func => (req, res, next) => {
    func(req, res, next).catch((error) => {
        console.error(error);
        res.status(500);
        res.send(RES_MSG.INTERNAL_ERROR);
        return;
    });
};

module.exports = errorHandler;
