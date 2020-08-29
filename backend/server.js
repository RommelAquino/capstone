const express = require('express') // require is like import but for node
const data = require('./data')

const app = express(); // always need for express app



// ------ Controllers ----------------
const listingCtrl = require('./controllers/listingController')

// --------- Routes --------------------
app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// Listing Route
app.use('/library', listingCtrl);


// ---------------- Server Listener ---
app.listen(5000, () => { console.log("Server started at localhost:5000") })