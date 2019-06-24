// - controllers/auth.js

const express = require('express'),
      jwt = require('jsonwebtoken'),
      router = express.Router();

const User = require('../models/user');

// - Routes

router.get('/',(req,res) => {
  res.status(200).render('sign-up')
  console.log("in GET method of route sign-up")
})

router.post('/',(req,res) => {
  console.log("in POST method of route sign-up")
  const newUser = new User(req.body);
  newUser.save()
  .then( (savedUser) => {
      const token = jwt.sign({ _id: savedUser._id }, process.env.SECRET);
      console.log("signed token in jwt");
      res.json({ token });
  }).catch( (error) => {
    console.log("cant create new User")
    console.log(req.body)
    res.status(400).json({ "error" : error })
  })
})


module.exports = router;
