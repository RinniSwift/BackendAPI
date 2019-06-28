// model/service.js


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


const Service = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: false },
	discounted: { type: String, required: true },
	original_price: { type: String, required: true },
	discounted_price: { type: String, required: false }
});

module.exports = mongoose.model('Service', Service)