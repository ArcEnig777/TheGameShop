const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var cors = require("cors");

const users = require('./routes/users');
const items = require('./routes/items');

app.get('/', function(req,res){
    res.json({'hello': 'world'});
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', users);
app.use('/api/items', items);

app.listen(5000);
