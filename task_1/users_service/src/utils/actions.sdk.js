const CONFIG = require('../config');
const axios = require('axios');


class Url {
    static base = CONFIG.USER_ACTIONS_SERVICE_URL;
    static get createAction() {
        return this.base + '/api/actions'
    }
}

class ActionsSdk {
    async sendUserRegisteredAction(userId) {
        const url = Url.createAction;
        return await axios.post(url, {user_id: userId, action_type: 'user-created'});
    }
    async sendUserModifiedAction(userId) {
        const url = Url.createAction;
        return await axios.post(url, { user_id: userId, action_type: 'user-modified' });
    }
}

module.exports = ActionsSdk;
