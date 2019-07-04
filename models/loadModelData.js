// Read in CSV
// Iterate through CSV rows
	// find or create service location /
	// find or create service category /
	// Attach service category to service location (if not already in there) /
	// find or create macro category /
	// attach macro category to service location and service category (if not already in there) /
	// find or create micro category /
	// attach micro category to service location and macro category (if not already in there) 
	// find or create service 
	// attach service to micro category and service location (if not already in there) 


// - Initial Setup

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const csv = require('csv-parser')
const fs = require('fs')


// - Model Setup

const serviceCategory = require('./serviceCategory');
const macroCategory = require('./macroCategory');
const microCategory = require('./microCategory');
const serviceLocation = require('./serviceLocation');
const service = require('./service');


var result = []

fs.createReadStream('sampleData.csv')
	.pipe(csv())
	.on('data', (data) => {

		result.push(data)

})
	.on('end', async () => {
		console.log("END")

		async function process(result) {

			for (const item of result) {

				// 1. Find or create service location
				await serviceLocation.findOne({ name: item["Location"], hours: item["Hours"] }, async function(err, res) {
					if (err) {
						console.log(err)
					}

					var locObj;
					if (res) {
						locObj = res
					} else {
						const locationObject = await serviceLocation.create({ name: item["Location"], hours: item["Hours"] })
						locObj = locationObject
					}


					// 2. Find or create service category
					await serviceCategory.findOne({ name: item["Service Category"] }, async function (err, obj) {
						if (err) {
							console.log(err)
						} 

						var catObj;
						if (obj) {
							catObj = obj
						} else {
							const catObject = await serviceCategory.create({ name: item["Service Category"] })
							catObj = catObject
						}

						
						// 3. Attach service category to service location (if not already in there)
						const matchedCats = await locObj.service_categories.filter(item => item._id == String(catObj._id))
						if (shouldAddTo(matchedCats)) {
							await locObj.service_categories.push(catObj._id)
							locObj.save()
						}


						// 4. Find or create macro category
						await macroCategory.findOne({ name: item["Macro Category"] }, async function (err, obj) {
							if (err) {
								console.log(err)
							}

							var macObj;
							if (obj) {
								macObj = obj
							} else {
								const macObject = await macroCategory.create({ name: item["Macro Category"] })
								macObj = macObject
							}

							// 5. Attach macro category to - service location and - service category (if not already in there)
							const matchedMacsLoc = await locObj.macro_categories.filter(item => item._id == String(macObj._id))
							if (shouldAddTo(matchedMacsLoc)) {
								await locObj.macro_categories.push(macObj._id)
								locObj.save()
							}
							const matchedMacsCat = await catObj.macro_categories.filter(item => item._id == String(macObj._id))
							console.log(matchedMacsCat)
							if (shouldAddTo(matchedMacsCat)) {
								await catObj.macro_categories.push(macObj._id)
								catObj.save()
							}


							// 6. Find or create micro category
							await microCategory.findOne({ name: item["Micro Category"] }, async function (err, obj) {
								if (err) {
									console.log(err)
								}

								var micObj;
								if (obj) {
									micObj = obj
								} else {
									const micObject = await microCategory.create({ name: item["Micro Category"] })
									micObj = micObject
								}


								// 7. Attach micro category to - service location and - macro category
								const matchedMicsLoc = await locObj.micro_categories.filter(item => item._id == String(micObj._id))
								if (shouldAddTo(matchedMicsLoc)) {
									await locObj.micro_categories.push(micObj._id)
									locObj.save()
								}
								const matchedMicsCat = await macObj.micro_categories.filter(item => item._id == String(micObj._id))
								if (shouldAddTo(matchedMacsCat)) {
									await macObj.micro_categories.push(micObj._id)
									macObj.save()
								}
							})

						})

					})

				}) 

			}

			console.log('Done!')
		}
		await process(result)
		
})


/// Use this function if you want to check if an array is empty. Returns true if is, else false. Used to indicate empty arrays.
function shouldAddTo(items) {
	if (items.length == 0) {
		return true
	} else {
		return false
	}
}




		// - FINDORCREATE


// fs.createReadStream('sampleData.csv')
// 	.pipe(csv())
// 	.on('data', (data) => {

// 		// 1. Find or create serviceLocation
// 		serviceLocation.findOrCreate({ name: data["Location"] }, (err, locObj) => {
// 			// <result being the existing or newly created object>

// 			// 2. Find or create service category
// 			serviceCategory.findOrCreate({ name: data["Service Category"] }, (err, catObj) => {

// 				// 3. Attach service category to service location (if not already in there)
// 				if (locObj.service_categories.findById(catObj._id) == none) {
// 					locObj.service_categories.push(catObj._id)
// 				}

// 				// 4. Find or create macro category
// 				macroCategory.findOrCreate({ name: data["Macro Category"] }, (err, macObj) => {

// 					// 5. Attach macro category to service location and service category
// 					if (locObj.macro_categories.findById(macObj._id) == none) {
// 						locObj.macro_categories.push(macObj._id)
// 					}
// 					if (catObj.macro_categories.findById(macObj._id) == none) {
// 						catObj.macro_categories.push(macObj._id)
// 					}

// 					// 6. Find or create micro category
// 					microCategory.findOrCreate({ name: data["Micro Category"] }, (err, micObj) => {

// 						// 7. Attach micro category to service location and macro category
// 						if (macObj.micro_categories.findById(micObj._id) == none){
// 							macObj.micro_categories.push(micObj._id)
// 						}
// 						if (locObj.micro_categories.findById(micObj._id) == none){
// 							locObj.micro_categories.push(micObj._id)
// 						}

// 						// 8. Find or create service
// 						const serviceObject = {name: data["Service"], description: data["Description"], original_price: data["Original Price"], discounted: data["Discounted?"],discounted_price: data["Discounted Price"] }
// 						service.findOrCreate(serviceObject, (err, servObj) => {

// 							// 9. Attach service to micro category and service location
// 							if (micObj.services.findById(servObj._id) == none) {
// 								micObj.services.push(servObj._id)
// 							}
// 							if (locObj.services.findById(servObj._id) == none) {
// 								locObj.services.push(servObj._id)
// 							}

// 					 	})
// 					})
// 				})
// 			})
// 		})



// })
// 	.on('end', () => {
// })


		// - END FINDORCREATE



/*


- Model Formatting


serviceLocation: 
	- name
	- hours
	- [service category id's]?
	- [service id's]
	- [macro category id's]
	- [micro category id's]
	

serviceCategory:
	- name
	- [macro category id's]


macroCategory:
	- name
	- [micro category id's]


microCategory:
	- name
	- [service id's]


service:
	- name
	- description
	- price
	- original_price
	- discounted_price
	- [service location id's]

*/
