// models/serviceCategory


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


const ServiceCategory = new Schema({
	name: { type: String, required: true },
	macro_categories: [{ type: Schema.Types.ObjectId, ref: "MacroCategory" }]
});

module.exports = mongoose.model('ServiceCategory', ServiceCategory)