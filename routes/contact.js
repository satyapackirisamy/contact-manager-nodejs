const router = require('express').Router();
const {Contact, Validate} = require('../models/contact')
 
router.get('/all', async (req,res) =>{
    const contacts = await Contact.find();
    res.send(contacts)
});

router.post('/new', async (req,res) =>{
    const { error } = Validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let contact = new Contact({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        phone : req.body.phone
    });

    contact = await contact.save()
    res.send(contact);
});

router.put('/:id', async (req,res)=>{
    let contactId = await Contact.findOne({ _id: req.params.id });
    if (!contactId) return res.status(400).send('Contact is not found!');
    
    const contact = await Contact.findByIdAndUpdate(req.params.id, {firstName: req.body.firstName},{
        new: true
    });
    res.send(contact);
})

router.delete('/:id', async (req,res)=>{
    const contact = await Contact.findByIdAndRemove(req.params.id)

    if(!contact) res.status(404).send('The contact with the given id is not found!');

    res.send(contact);

});

module.exports = router;