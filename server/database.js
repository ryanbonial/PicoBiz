const loki  = require('lokijs');

const dbOptions = {
	autoload: true,
	autoloadCallback : onDbLoaded,
	autosave: true,
	autosaveInterval: 10000 // 10 seconds
};
const db = new loki('picoBiz.db', dbOptions);

function onDbLoaded() {
	console.log('Database Loaded')
 	let	customerDb = db.getCollection('customers');
	// if database did not exist it will be empty so intitialize here
	if (customerDb === null) {
		customerDb = db.addCollection('customers');
	}
	module.exports.customerDb = customerDb;
}

