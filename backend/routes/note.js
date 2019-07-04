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
  const date = Date.parse(request.body.date);

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

// /:id is the object's id in database
// this GET request will return the information of the given note matching the id from database
router.route('/:id').get((response, request) => {
  Note.findById(request.params.id)
    .then(note => response.json(note))
    .catch(err => response.status(400).json('Error: ' + err));
});

// Delete note based on id
router.route('/:id').delete((request, response) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => response.json('Note deleted...'))
    .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;
