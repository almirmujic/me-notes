const router = require('express').Router();
let Title = require('../models/title.model');

// baseurl.com/title/ - GET request
router.route('/').get((request, response) => {
  Title.find()
    .then(titles => response.json(titles))
    .catch(err => response.status(400).json('Error: ' + err));
});
