const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
}, {timestamps: true}); 

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;


//  _id: '4',
// name: 'Stephen Curry',
// category: 'Football',
// image: '/images/currypsa10.jpg',
// team: 'Golden State Warriors',
// price: 1000