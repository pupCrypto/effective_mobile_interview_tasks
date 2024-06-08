const { STATUS, RES_MSG } = require('../consts');
const { UserService } = require('../services/user');
const ActionsSdk = require('../utils/actions.sdk');


async function editProfile(req, res) {
    const targetUserId = Number(req.params.user_id);
    if (req.auth.user.id !== targetUserId) {
        res.status(403);
        res.json({status: STATUS.ERROR, msg: RES_MSG.ACCESS_DENIED});
        return;
    }
    await UserService.updateUser(req.auth.user, req.body);
    res.json({status: STATUS.OK, msg: RES_MSG.USER_UPDATED});

    const sdk = new ActionsSdk();
    await sdk.sendUserModifiedAction(req.params.user_id);
}

async function getProfile(req, res) {
    const user = await UserService.getUserById(req.params.user_id);
    if (!user) {
        res.status(404);
        res.json({status: STATUS.ERROR, msg: RES_MSG.USER_DOES_NOT_EXISTS});
        return;
    }
    const data = UserService.getUserDataObj(user);
    res.json(data);
}
async function getProfiles(req, res) {
    const page = Number(req.query.page) || 1;
    const users = await UserService.getUsers(page);
    res.send({status: STATUS.OK, users: [...UserService.getUsersDataObj(users)]});
}

module.exports = {
    editProfile,
    getProfile,
    getProfiles,
};
