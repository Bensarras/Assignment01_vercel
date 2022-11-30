
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const EmployeeRouter = require('./Routes/EmployeeRoutes');
const AccountRouter = require('./Routes/AccountRoutes');
const SERVER_PORT = 8081;

const DB_URL = "mongodb+srv://User:xbullx@cluster1.qbnwblu.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
// DONE
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api', AccountRouter, EmployeeRouter);


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Assignment01</h1>");
});


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})