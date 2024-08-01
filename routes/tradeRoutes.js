// routes/tradeRoutes.js

const express = require('express');
const tradeController = require('../controllers/tradeController');

const router = express.Router();

router.post('/buy', tradeController.buyShares);
router.post('/sell', tradeController.sellShares);

module.exports = router;
