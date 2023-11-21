const express = require('express');
const router = express.Router();
const ContactPerson = require('../model/contactperson_model');

// Array to store created contacts
let createdContacts = [];

router.post('/CreateContactPersonDetails', async (req, res) => {
  try {
    const newContactPerson = new ContactPerson({
        ConatctPersonID: Math.floor((Math.random() * 100000) + 1),
      ContactPersonName: req.body.ContactPersonName,
      Designation: req.body.Designation,
      Email: req.body.Email,
      Address: req.body.Address,
      MobileNo: req.body.MobileNo,
      LandlineNo: req.body.LandlineNo,
      Countrycode: req.body.Countrycode,
      sourceId: req.body.sourceId,
    });

    const savedContactPerson = await newContactPerson.save();
    
    // Push the new contact to the array
    createdContacts.push(savedContactPerson);

    res.json({
      success: true,
      message: 'ContactPerson created successfully',
      data: savedContactPerson,
      allContacts: createdContacts,
    });
  } catch (error) {
    console.error('Error creating ContactPerson:', error);
    res.status(500).json({ success: false, message: 'Something went wrong', data: null });
  }
});

module.exports = router;
