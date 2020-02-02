var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

router.post('/', (request, response) => {
  const apiKey = request.body.api_key
  const location = request.body.location

  if (!apiKey) {
    return response.status(401).json({ error: `Unauthorized access` })
  }

  if (!location) {
    return response.status(400).json({ error: `Please provide a location.` })
  }

  database('users')
    .where('api_key', apiKey).select()
    .then(user => {
      if (user.length === 0) {
        response.status(401).json({ error: `Unauthorized access` })
      } else {
        database('favorites').insert({ location: location, user_id: user[0].id }, 'id')
          .then(favorite => {
            response.status(201).json({ message: `${location} has been added to your favorites`})
          })
      }
    }).catch(error => {
      response.status(500).json({ error: `Couldn't add ${location} to favorites.` })
    })
});

module.exports = router;
