const express = require('express');
const CONFIG = require('./src/config');

const app = express();


app.get('/', (req, res) => {
    res.send('TypeScript express app');
});

app.listen(CONFIG.PORT, CONFIG.HOST, () => {
    console.log('Server is running!');
});
