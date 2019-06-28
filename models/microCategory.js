// models/microCategory.js


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


const MicroCategory = new Schema({
	name: { type: String, required: true },
	services: [{ type: Schema.Types.ObjectId, ref: "Service" }]
});

module.exports = mongoose.model('MicroCategory', MicroCategory)