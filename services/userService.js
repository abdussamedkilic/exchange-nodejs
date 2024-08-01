// services/userService.js

const { Portfolio } = require('../models');

class UserService {
    static async createPortfolio(data) {
        const { userId, balance } = data;
        const portfolio = await Portfolio.create({ userId, balance });
        return portfolio;
    }
}

module.exports = UserService;
