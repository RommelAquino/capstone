const express = require('express') // require is like import but for node
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express(); // always need for express app

require('dotenv').config();
const PORT = process.env.PORT || 3001;

const productRoutes = require('./routes/productRoute')

const corsOption = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// --------- Routes --------------------
app.get("/", (req, res) => {
    res.send(routes);
});

app.use("/api/v1/product", productRoutes)

// ---------------- Server Listener ------------
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));