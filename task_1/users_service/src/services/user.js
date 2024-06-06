const User = require('../models/user');
const { genJwtToken } = require('../utils/jwt');
const { hashPassword } = require('../utils/sha');
const { USERS_PER_PAGE } = require('../consts');


class UserService {
    static clearUpdateData(data) {
        delete data.password;
        delete data.createdAt;
        delete data.updatedAt;
        return data;
    }
    static async updateUser(user, data) {
        this.clearUpdateData(data);
        user.set(data);
        await user.save();
    }

    static async updateUserByUserId(userId, data) {
        const user = await this.getUserById(userId);
        return await this.updateUser(user, data);
    }

    static async checkUserExist(email) {
        const user = await this.getUserByEmail(email);
        return user !== null;
    }

    static async getUserById(userId) {
        return await User.findOne({ where: { id: userId } });
    }

    static async getUserByEmail(email) {
        return await User.findOne({ where: { email: email } });
    }

    static async getUsers(page) {
        return await User.findAll({
            limit: USERS_PER_PAGE,
            offset: (page - 1) * USERS_PER_PAGE,
            order: [
                ['createdAt', 'ASC']
            ]
        });
    }

    static getUserDataObj(user) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            photo: user.photo,
            regDateTime: user.createdAt,
        };
    }

    static getUsersDataObj(users) {
        return users.map(user => this.getUserDataObj(user));
    }

    static async login(email, password) {
        const hashedPassword = hashPassword(password);
        const user = await User.findOne({ where: { email: email, password: hashedPassword } });
        return genJwtToken({userId: user.id});
    }

    static async register(firstName, email, password) {
        const hashedPassword = hashPassword(password);
        const user = User.build({firstName, email, password: hashedPassword});
        await user.save();
    }
}

module.exports = {
    UserService,
};