const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  EMAIL: process.env.EMAIL,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
};

