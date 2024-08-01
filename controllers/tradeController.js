// controllers/tradeController.js

const TradeService = require('../services/tradeService');

exports.buyShares = async (req, res) => {
    try {
        const result = await TradeService.buy(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.sellShares = async (req, res) => {
    try {
        const result = await TradeService.sell(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
