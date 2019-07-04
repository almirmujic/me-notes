const router = require('express').Router();
let Title = require('../models/title.model');

// baseurl.com/title/ - GET request
router.route('/').get((request, response) => {
  Title.find()
    .then(titles => response.json(titles))
    .catch(err => response.status(400).json('Error: ' + err));
});

// baseurl.com/title/add - POST request
router.route('/add').post((request, response) => {
  const title = request.body.title;

  const newTitle = new Title({ title });

  newTitle
    .save()
    .then(() => response.json('Title added...'))
    .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;
