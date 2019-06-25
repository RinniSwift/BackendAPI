// - controllers/allServices.js

const express = require('express');

const router = express.Router();
const fs = require('fs');


// - Routes

router.get('/',(req,res) => {
   fs.readFile('serviceCategory.json', (err, data) => {
      if (err) throw err;
      all = JSON.parse(data);
   });
   res.json(all)
})

router.get('/nails',(req,res) => {
   fs.readFile('nailService.json', (err, data) => {
      if (err) throw err;
      nails = JSON.parse(data);
   });
   res.json(nails)
})

router.get('/hair',(req,res) => {
   fs.readFile('hairService.json', (err, data) => {
      if (err) throw err;
      hair = JSON.parse(data);
   });
   res.json(hair)
})

module.exports = router;
