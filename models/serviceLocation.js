// models/serviceLocation.js


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


const ServiceLocation = new Schema({
	location: { type: String, required: true },
	hourse: { type: String, required: true },
	discounted: { type: Boolean, required: true },
	description: { type: String, required: false },
	service_name: { type: String, required: true },
	original_price: { type: String, required: false },
	discount_price: { type: String, required: false },
	address: { type: String, required: true },
	number: { type: Number, required: false }
});

module.exports = mongoose.model('ServiceLocation', ServiceLocation)