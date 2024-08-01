// models/portfolio.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Portfolio = sequelize.define('Portfolio', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        get() {
            const value = this.getDataValue('balance');
            return parseFloat(value);
        },
        set(value) {
            this.setDataValue('balance', parseFloat(value).toFixed(2));
        },
    },
});

module.exports = Portfolio;
