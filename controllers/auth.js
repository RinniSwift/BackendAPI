const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = app => {
    // GET route to signup page
    app.get('/sign-up', function(req, res){
      res.status(200).render("sign-up")
    })

    // POST route
    app.post('/sign-up', (req, res) => {
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
};
