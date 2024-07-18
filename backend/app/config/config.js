require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  API_URL:
    `${process.env.API_URL}?ids=bitcoin,ethereum,tether,solana,cardano&vs_currencies=usd` ||
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,solana,cardano&vs_currencies=usd",
};
