const db = require('../models');
const ProductData = require('./ProductData.json');
db.Product.remove({}, () => {
	ProductData.forEach(product => {
		db.Product.create(product, (error, createdProduct) => {
			if (error) return console.log(error);
			console.log(createdProduct);
		});
	});
});

