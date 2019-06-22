// - controllers/auth.js

const express = require('express'),
      router = express.Router();

const jwt = require('jsonwebtoken');

const User = require('../models/user');


// - Routes 

router.get('/',(req,res) => {
  console.log("in here")
  res.status(200).render('sign-up')
})

router.post('/',(req,res) => {
  console.log("in here")
  const newUser = new User(req.body);
  newUser.save()
  .then( (savedUser) => {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);
      console.log("signed token in jwt");
      res.json({ token });
  }).catch( (error) => {
    res.status(400).json({ "error" : error })
  })
})


module.exports = router;
