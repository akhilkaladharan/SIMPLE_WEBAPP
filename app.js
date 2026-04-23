const express = require('express');
const os = require('os');

const app = express(); //create app

app.get('/', (req, res) => {
    res.send(`Hello from pod: ${os.hostname()}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});