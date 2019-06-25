// models/allServices.js


// Mongoose Setup

const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


// - Schemas

const ServiceCategory = new Schema({
	macro_category = [ MacroCategory ]
});

const MacroCategory = new Schema({
	micro_category = [ MicroCategory ]
});

const MicroCategory = new Schema({
	service_location = [ ServiceLocation ]
});

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