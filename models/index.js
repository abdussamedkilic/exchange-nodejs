// models/index.js

const sequelize = require('../config/database');
const Share = require('./share');
const Portfolio = require('./portfolio');
const Transaction = require('./transaction');
const User = require('./user');

sequelize.sync();

module.exports = {
    Share,
    Portfolio,
    Transaction,
    User
};
