const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Any frontend application can access
app.use(cors())

// First, it converts JSON to a JS Object in the payload of the request 
app.use(express.json());

// After, the request needs to be paired with one of the routes
app.use(routes);

app.listen(3333);
