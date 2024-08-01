// main.js

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const tradeRoutes = require('./routes/tradeRoutes');
const userRoutes = require('./routes/userRoutes');
const pingRoutes = require('./routes/pingRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', pingRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`);
});
