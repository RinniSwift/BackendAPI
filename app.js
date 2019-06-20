var exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const express = require('express')
const expressValidator = require('express-validator');
const app = express()
const fs = require('fs');

require('./controllers/auth.js')(app);

const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());        // Add after body parser initialization!

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Reading .json files in other files
fs.readFile('nails.json', (err, data) => {
    if (err) throw err;
    nails = JSON.parse(data);
});

fs.readFile('serviceCategory.json', (err, data) => {
    if (err) throw err;
    allServices = JSON.parse(data);
});

// GET - home page
app.get('/', (req, res) => {
	res.send('Hello World!')
})

// GET - paths
app.get('/nails', (req, res) => {
	res.json(nails)
})

app.get('/allServices', (req, res) => {
    res.json(allServices)
})

app.listen(3000, () => {
 console.log('App listening on port 3000!')
})
