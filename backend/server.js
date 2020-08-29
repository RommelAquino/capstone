const express = require('express') // require is like import but for node
const data = require('./data')
require('dotenv').config();


const app = express(); // always need for express app
const routes = require('./routes/productRoute')

const PORT = process.env.PORT || 5000;


// ------ Controllers ----------------
const productCtrl = require('./controllers/productController')

// --------- Routes --------------------
app.get("/", (req, res) => {
    res.send(routes);
});

// app.get("/product/id", (req, res) => {
//     res.send(data.products._id);
// });




// ---------------- Server Listener ------------
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));