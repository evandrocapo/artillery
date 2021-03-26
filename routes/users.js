var express = require('express');
var router = express.Router();
var users = []

/* POST a new user. */
router.post('/', function(req, res, next) {
  let user = req.body;

  if(!(user.username && user.name && user.password && user.email)){
    res.status(400).send({
      error: "was missing values"
    })
  } else {
    users.push(user);
    res.status(201).send({
      username: user.username,
      name: user.name,
      password: user.password,
      email: user.email
    });
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  let parsedUsers = users.map((data) => {
    return {
      username: data.username,
      name: data.name,
      email: data.email
    }
  })
  res.status(200).send(parsedUsers);
});

module.exports = router;
