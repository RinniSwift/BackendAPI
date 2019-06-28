// Read in CSV
// Iterate through CSV rows
	// find or create service location
	// find or create service category
	// Attach service category to service location (if not already in there)
	// find or create macro category
	// attach macro category to service location and service category (if not already in there)
	// find or create micro category
	// attach micro category to service location and macro category (if not already in there)
	// find or create service
	// attach service to micro category and service location (if not already in there)




const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create')
const csv = require('csv-parser')	// install csv
const fs = require('fs')


// - Model Setup

const macroCategory = require('./macroCategory');
const microCategory = require('./microCategory');
const serviceCategory = require('./serviceCategory');
const serviceLocation = require('./serviceLocation');


macroCategory.plugin(findOrCreate)
microCategory.plugin(findOrCreate)
serviceCategory.plugin(findOrCreate)
serviceLocation.plugin(findOrCreate)


fs.createReadStream('SF Service & Pricing Data.xlsx - San Francisco Services.csv')
	.pipe(csv())
	.on('data', (data) => {

		// find or create serviceLocation
		// serviceLocation.findOrCreate({ name: 'Mike' }, (err, result) => {

		// })

	})
	.on('end', () => {
});