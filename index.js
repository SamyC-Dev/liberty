const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Config
require('./config/db_connection');
require('./app/models/userModel');
app.use(express.json());

// Routes
app.use(require('./app/routes/auth'));


app.listen(PORT, () => console.log(`Server listen on port: ${PORT}.`));