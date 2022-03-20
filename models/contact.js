const Joi = require('@hapi/joi');
const res = require('express/lib/response');
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        minlength:5,
        maxlength:15
    }

});

const Contact = mongoose.model('Contact', contactSchema); 

function validateContact(Contact) {
    const schema = Joi.object({
        firstName: Joi.string().min(5).required(),
        lastName: Joi.string().min(5).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().min(5).required()
    });
    return schema.validate(Contact);
}

module.exports.Contact = Contact;
module.exports.Validate = validateContact;