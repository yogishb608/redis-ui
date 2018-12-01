const express = require('express');
const app = express();
const port = 3001;

import connector from "./routes/connector";

app.use(express.static('client/')); /* Path to static files */

app.use('/connector', connector); /* Routes */

// app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))