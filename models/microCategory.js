// models/microCategory.js


const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;

	  
const MicroCategory = new Schema({
	name: { type: String },
	service_locations: [{ type: Schema.Types.ObjectId, ref: "ServiceLocation" }]
});

module.exports = mongoose.model('MicroCategory', MicroCategory)