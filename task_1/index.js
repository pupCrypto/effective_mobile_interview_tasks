const express = require('express');
const middlewares = require('./src/middlewares');
const routers = require('./src/routers');
const CONFIG = require('./src/config');

const app = express();
 
app.use(...middlewares);
app.use('/api', ...routers);

app.listen(CONFIG.PORT, '0.0.0.0', function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", CONFIG.PORT);
});
