const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    image: {
        type: String,
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