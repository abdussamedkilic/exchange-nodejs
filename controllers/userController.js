// controllers/userController.js

const UserService = require('../services/userService');

exports.createPortfolio = async (req, res) => {
    try {
        const result = await UserService.createPortfolio(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
