// models/transaction.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Portfolio = require('./portfolio');
const Share = require('./share');

const Transaction = sequelize.define('Transaction', {
    type: {
        type: DataTypes.ENUM('BUY', 'SELL'),
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        get() {
            const value = this.getDataValue('price');
            return parseFloat(value);
        },
        set(value) {
            this.setDataValue('price', parseFloat(value).toFixed(2));
        },
        allowNull: false,
    },
    portfolioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Portfolio,
            key: 'id',
        },
    },
    shareId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Share,
            key: 'id',
        },
    },
});

module.exports = Transaction;
