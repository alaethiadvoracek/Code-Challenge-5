const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//POST// 
router.post('/', (req, res) => {
    let savedMessage = self.messages.list;
    console.log('message', savedMessage);


    message.save((error, savedDoc) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            console.log('new Document: ', savedDoc);
            res.sendStatus(201);
        }
    }); // end save
})//end get

//GET//
router.get ('/', (req, res) => {
    Message.find({}, (error, message) => {
        if (error) {
            console.log('Error getting messages', error);
            res.sendStatus(500);
        } else {
            console.log('Found messages', message);
            res.send(message);
        }
    });
});//end get 


module.exports = router;