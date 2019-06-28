// models/serviceLocation.js


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


const ServiceLocation = new Schema({
	name: { type: String, required: true },
	hours: { type: String, required: true },
	address: { type: String, required: false },
	number: { type: String, required: false },
	service_categories: [{ type: Schema.Types.ObjectId, ref: "ServiceCategory" }],
	macro_categories: [{ type: Schema.Types.ObjectId, ref: "MacroCategory" }],
	micro_categories: [{ type: Schema.Types.ObjectId, ref: "MicroCategory" }],
	services: [{ type: Schema.Types.ObjectId, ref: "ServiceCategory" }]
});

module.exports = mongoose.model('ServiceLocation', ServiceLocation)