const express = require('express')
const app = express();
const PORT = 8008
 
require('./startup/routes')(app)
require('./startup/db')()

app.listen(PORT, ()=>console.log(`Connected to the port ${PORT}`))