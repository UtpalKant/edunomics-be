// library imports.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// using body parser.
app.use(bodyParser.urlencoded({ extended: false }));

// custom imports.
const router = require('./routes/index.router');


// calls routes/router middleware.
app.use(router);

// setting port number
process.env.PORT = 52898;

// server listening.
app.listen(process.env.PORT, () => {
    console.log(`node started at ${process.env.PORT}`);
});