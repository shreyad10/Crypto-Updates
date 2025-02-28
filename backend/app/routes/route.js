const express = require("express");
const axios = require("axios");
const Price = require("../models/Prices");
const config = require("../config/config");

const router = express.Router();

router.get("/:symbol", async (req, res) => {
  try {
    const prices = await Price.find({ symbol: req.params.symbol })
      .sort({ timestamp: -1 })
      .limit(20);
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

const fetchData = async () => {
  try {
    console.log(config.API_URL);
    // const response = await axios.get(config.API_URL);
    const response = await axios({
      method: "get",
      url: config.API_URL,
      headers: {
        x_cg_demo_api_key: process.env.COINGECKO_API_KEY,
      },
    });
    const prices = Object.entries(response.data).map(([symbol, data]) => ({
      symbol,
      price: data.usd,
    }));
    console.log(prices);

    await Price.insertMany(prices.map((price) => new Price(price)));
  } catch (error) {
    console.error("Error fetching data:", error.response.data);
  }
};

setInterval(fetchData, 30000); // Poll every 30 seconds

module.exports = router;
