const router = require('express').Router();
let Note = require('../models/note.model');

// baseurl.com/note/ - GET request
router.route('/').get((request, response) => {
  Note.find()
    .then(notes => response.json(notes))
    .catch(err => response.status(400).json('Error: ' + err));
});

// baseurl.com/note/add - POST request
router.route('/add').post((request, response) => {
  const title = request.body.title;
  const body = request.body.body;
  const date = request.body.date;

  const newNote = new Note({
    title,
    body,
    date
  });

  newNote
    .save()
    .then(() => response.json('Note added...'))
    .catch(err => response.status(400).json('Error: ' + err));
});
