var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var list = require('./app/api/List');
var connection = require('./app/config/database');

app.use('/', list);
mongoose.connect(connection.local, { useMongoClient: true }, (err, database) => {
    if (err) console.log(err.message)
    else {
        console.log('Database is Connected!')
    }
});

const port = 5000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = app;