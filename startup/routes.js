const express = require('express')
const contactRoute = require('../routes/contact')

module.exports = function(app){
    app.use(express.json())
    app.use('/api/contact', contactRoute)
}