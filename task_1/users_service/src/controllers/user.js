const {
    UserService,
    UserAlreadyExistsError,
} = require('../services/user');
const { STATUS, RES_MSG } = require('../consts');

async function registerUser(req, res) {
    const { firstName, email, password } = req.body;
    const userExists = await UserService.checkUserExist(email);
    if (userExists) {
        res.status(400);
        res.json({status: STATUS.ERROR, msg: RES_MSG.USER_ALREADY_EXISTS});
        return;
    }
    await UserService.register(firstName, email, password);
    res.json({status: STATUS.OK, msg: RES_MSG.USER_REGISTERED});
}
async function loginUser(req, res) {
    const { email, password } = req.body;
    const userExists = await UserService.checkUserExist(email);
    if (!userExists) {
        res.status(404);
        res.json({status: STATUS.ERROR, msg: RES_MSG.USER_DOES_NOT_EXISTS});
        return;
    }
    const accessToken = await UserService.login(email, password);
    res.json({access_token: accessToken});
}

module.exports = {
    registerUser,
    loginUser,
};
 