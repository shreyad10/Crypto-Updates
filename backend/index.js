const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const config = require('./app/config/config');
const Price = require('./app/models/Prices');
const priceRoutes = require('./app/routes/route');
let cors = require("cors");

const app = express();
const port = config.PORT;

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type,Authorization"
    );
  
    next();
  });
  app.use(cors());

app.use(express.json());
app.use('/api/prices', priceRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
