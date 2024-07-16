const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const config = require('./app/config/config');
const Price = require('./app/models/Prices');
const priceRoutes = require('./app/routes/route');

const app = express();
const port = config.PORT;

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/prices', priceRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
