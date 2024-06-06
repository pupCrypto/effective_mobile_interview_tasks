const env = process.env;
const ONE_HOUR = 3600;

const CONFIG = {
    ACCESS_TOKEN_LIFETIME_SECS: Number(env.ACCESS_TOKEN_LIFETIME_SECS) || ONE_HOUR,
    PORT: env.PORT || '3000',

    DB_NAME: env.DB_NAME || 'mysql',
    DB_HOST: env.DB_HOST || 'localhost',
    DB_PORT: env.DB_PORT || '3306',
    DB_USER: env.DB_USER || 'mysql',
    DB_PWD: env.DB_PWD || 'mysql',
    DB_DIALECT: env.DB_DIALECT || 'mysql',

    SECRET_KEY: env.SECRET_KEY || 'SECRET_KEY',
}


module.exports = CONFIG;
