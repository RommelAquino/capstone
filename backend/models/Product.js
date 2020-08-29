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

const ProductModel = mongoose.model('Product', ProductSchema);
module.export = ProductModel;