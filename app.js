require('dotenv').config();
const express = require('express');
const app = express();
const redisClient = require('./db/redis');


app.get('/', (req, res) => {

    redisClient.set('hello', 'world');

    redisClient.get('hello', (err, data) => {
        if (err) {
            return res.send(err);
        }

        res.send(data); // world
    });

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
