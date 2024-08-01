// models/share.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Share = sequelize.define('Share', {
    symbol: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        get() {
            const value = this.getDataValue('price');
            return parseFloat(value);
        },
        set(value) {
            this.setDataValue('price', parseFloat(value).toFixed(2));
        },
    },
});

module.exports = Share;
