require('dotenv').config();

module.exports = {
  mongoUrl: `${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}` || 'mongodb://localhost:27017/clean-node-api',
  tokenSecret: process.env.TOKEN_SECRET || 'secret',
  port: process.env.PORT || 5858
};
