const express = require('express')
const app = express();
const PORT = 8008
 
require('./startup/routes')(app)
require('./startup/db')()

app.listen(()=>console.log('Connection is success!!'))