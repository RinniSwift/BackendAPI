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
              res.json({ token });

              console.log("signed token in jwt");
          }).catch( (error) => {
            response.status(400).json({ "error" : error})
          })
    })


    // This function not getting called???
    function signupViaAjax() {
       fetch("/sign-up")
         .then(function(data) {
           // Here you get the data to modify as you please
           console.log("Get the data!!")
         })
         .catch(function(error) {
           // If there is any error you will catch them here
           console.log("error")
         });
     }
};
