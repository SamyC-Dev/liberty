const express = require('express');
const app = express();
const PORT = 5000;
require('./config/db_connection');


app.get('/', (req, res) => {
    res.send('hello');
});



app.listen(PORT, () => console.log(`Server listen on port: ${PORT}.`));