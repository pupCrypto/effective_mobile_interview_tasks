const profileRouter = require('./routers/profile');
const userRouter = require('./routers/user');

const routers = [
    profileRouter,
    userRouter,
];

module.exports = routers;
