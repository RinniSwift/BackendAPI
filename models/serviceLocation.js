// models/serviceLocation.js


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;

	  
const ServiceLocation = new Schema({
	location: { type: String },
	hourse: { type: String },
	discounted: { type: Boolean },
	description: { type: String },
	service_name: { type: String },
	original_price: { type: String },
	discount_price: { type: String },
	address: { type: String },
	number: { type: Number }
});

module.exports = mongoose.model('ServiceLocation', ServiceLocation)