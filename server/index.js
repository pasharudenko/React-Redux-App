// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./route');
const mongoose = require('mongoose');
const cors = require('cors');
//DB Setup
mongoose.connect('mongodb://localhost:auth/auth123');

// App Setup
app.use(morgan('combined')); // login incoming request mostly using for debugging
app.use(cors());
app.use(bodyParser.json({ type: '*/*' })); // middleware that parse data into JSON
router(app);
// Server Setup
const port = process.env.PORT || 3090; // If variable PORT has already defined use it otherwise use port - 3090;
const server = http.createServer(app); // Create an http server that knows how to receive http requests
server.listen(port); // Tells the server to listen to the port
console.log('Server listening on port:', port);