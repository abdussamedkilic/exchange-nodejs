// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/portfolio', userController.createPortfolio);

module.exports = router;
