const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
});

mongoose.connection.on('error', (err) => {
    console.log("Failed to connect to MongoDB", err)
});