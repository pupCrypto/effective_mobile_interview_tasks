const env = process.env;

const CONFIG = {
    PORT: env.PORT || 3000,
    HOST: env.HOST || '0.0.0.0',
};

module.exports = CONFIG
