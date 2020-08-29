const db = require('../models')


// Read
const index = (req, res) => {
    db.Product.find({}, (err, foundProducts) => {
        if (err) console.log('Error in products #index:', err);
        res.status(200).json(foundProducts);
    });
};

// Show
const show = (req, res) => {
    db.Product.findById(req.params.id, (err, foundProduct) => {
        if (err) console.log('Error in product #show:', err);
        res.status(200).json(foundProduct);
    });
};




// Create
const create = (req, res) => {
    db.Product.create(req.body, (err, newProduct) => {
        if (err) console.log('Error in product #create:', err);
        res.status(200).json(newProduct);
    });
};



// Update
const update = (req, res) => {
    db.Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}, // returns the object of what you updated.
        (err, updatedProduct) => {
        if (err) console.log('Error in product #update:', err);
        res.status(200).json(updatedProduct);
    });
};




// Destroy
const destroy = (req, res) => {
    db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if (err) console.log('Error in product #destroy:', err);
        res.status(200).json(deletedProduct);
    });
};

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}