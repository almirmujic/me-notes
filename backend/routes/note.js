const router = require('express').Router();
let Note = require('../models/note.model');

// baseurl.com/note/ - GET request
router.route('/').get((request, response) => {
  Note.find()
    .then(notes => response.json(notes))
    .catch(err => response.status(400).json('Error: ' + err));
});
