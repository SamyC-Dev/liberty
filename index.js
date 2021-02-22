const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('./config/db_connection');
require('./app/models/userModel');


app.get('/', (req, res) => {
    res.send('hello');
});



app.listen(PORT, () => console.log(`Server listen on port: ${PORT}.`));