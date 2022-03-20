const router = require('express').Router();
const {Contact, Validate} = require('../models/contact')
 
router.get('/all', async (req,res) =>{
    res.send("Hello!! How are you?")
});

router.post('/new', async (req,res) =>{
    const { error } = Validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let contact = new Contact({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phone : req.body.phone
    });

    contact = await contact.save()
    res.send(contact);
})

module.exports = router;