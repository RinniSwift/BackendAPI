// - app.js

require('dotenv').config();

const exphbs = require('express-handlebars'),
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  express = require('express'),
	  expressValidator = require('express-validator'),
	  app = express();

const allServiceRouter = require('./controllers/allServices'),
	  authRouter = require('./controllers/auth');


// - Creating Data

const script = require('./models/loadModelData');


// - Database Setup

mongoose.connect(process.env.DATABASEURI, { useNewUrlParser: true });


// - Initial Setup

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// - Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());  // Add after body parser initialization!


// - Routes

app.get('/', (req, res) => {
	res.send('Savai API')
})

app.use('/allServices', allServiceRouter)
app.use('/sign-up', authRouter)


// - Server Setup

app.listen(3000, () => {
 console.log('App listening on port 3000!')
})
