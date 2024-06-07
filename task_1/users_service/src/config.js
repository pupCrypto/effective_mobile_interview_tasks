const env = process.env;
const ONE_HOUR = 3600;

const CONFIG = {
    ACCESS_TOKEN_LIFETIME_SECS: Number(env.ACCESS_TOKEN_LIFETIME_SECS) || ONE_HOUR,
    PORT: env.PORT || '3001',

    DB_NAME: env.DB_NAME || 'postgres',
    DB_HOST: env.DB_HOST || 'localhost',
    DB_PORT: env.DB_PORT || '5432',
    DB_USER: env.DB_USER || 'postgres',
    DB_PWD: env.DB_PWD || 'postgres',
    DB_DIALECT: env.DB_DIALECT || 'postgres',

    USER_ACTIONS_SERVICE_HOST: env.USER_ACTIONS_SERVICE_HOST || 'localhost',
    USER_ACTIONS_SERVICE_PORT: env.USER_ACTIONS_SERVICE_PORT || '3000',
    get USER_ACTIONS_SERVICE_URL() {
        return `http://${this.USER_ACTIONS_SERVICE_HOST}:${this.USER_ACTIONS_SERVICE_PORT}`;
    },

    SECRET_KEY: env.SECRET_KEY || 'SECRET_KEY',
}


module.exports = CONFIG;
