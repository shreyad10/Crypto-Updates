require("dotenv").config();
console.log( `${process.env.API_URL}+&x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}`)

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  API_URL:
    `${process.env.API_URL}?x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}` ||
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd",
};
