const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  const currentTime = new Date();

  res.json({
    status: 'success',
    message: 'Server is running',
    date: currentTime.toISOString()
  });
});

module.exports = router;