// models/macroCategory


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


const MacroCategory = new Schema({
	name: { type: String },
	micro_categories: [{ type: Schema.Types.ObjectId, ref: "MicroCategory" }]
});

module.exports = mongoose.model('MacroCategory', MacroCategory)