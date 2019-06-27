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


// - Model Setup

const macroCategory = require('./models/macroCategory');
const microCategory = require('./models/microCategory');
const serviceCategory = require('./models/serviceCategory');
const serviceLocation = require('./models/serviceLocation');


// - Creating Data

// const hello = async () => {


// 	try {
// 		const a = await microCategory.create({ name: "Eyebrow Tinting"})
// 		const b = await microCategory.create({ name: "Tinting"})
		// const c = await microCategory.create({ name: "Eyelash Perm"})
		// const d = await microCategory.create({ name: "Eyelash Removal"})
		// const e = await microCategory.create({ name: "Eyelash Tinting"})
		// const e = await microCategory.create({ name: "Tinting"})

		
// 		const category = await macroCategory.findById("5d15238bd591dc20208ab548") // Eyebrow


// 		const arr = [a,b]
// 		arr.forEach(function(item, index) {
// 			category.micro_categories.push(item._id)
// 		});
		


// 		await category.save()
// 	} catch(err) {
// 		console.log(err)
// 		console.log("errorrr")
// 	}
// }

// hello()


// - End Creating Data



// - Database Setup

mongoose.connect(process.env.DATABASEURI);


// - Initial Setup

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// - Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());  // Add after body parser initialization!


// - Routes

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use('/allServices', allServiceRouter)
app.use('/sign-up', authRouter)


// - Server Setup

app.listen(3000, () => {
 console.log('App listening on port 3000!')
})
