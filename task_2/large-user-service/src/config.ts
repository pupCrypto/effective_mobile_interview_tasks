const env = process.env;

const CONFIG = {
  PORT: env.PORT || 3000,
  HOST: env.HOST || '0.0.0.0',

  DB_NAME: env.DB_NAME || 'postgres',
  DB_USER: env.DB_USER || 'postgres',
  DB_PWD: env.DB_PWD || 'postgres',
  DB_HOST: env.DB_HOST || 'localhost',
  DB_DIALECT: env.DB_DIALECT || 'postgres',
};

export default CONFIG;
