const profileRouter = require('./routers/profile');
const userRouter = require('./routers/user');
const photoRouter = require('./routers/photos');

const routers = [
    profileRouter,
    userRouter,
    photoRouter,
];

module.exports = routers;
