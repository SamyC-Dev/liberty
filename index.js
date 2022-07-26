const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

// Config
require('./config/db_connection');
require('./app/models/userModel');
require('./app/models/postModel');
app.use(express.json());

// Routes
app.use(require('./app/routes/auth'));
app.use(require('./app/routes/post'));


app.listen(PORT, () => console.log(`Server listen on port: ${PORT}.`));