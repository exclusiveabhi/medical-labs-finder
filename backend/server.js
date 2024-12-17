const express = require('express');
const axios = require('axios');
// const Cors = require('cors');
const bodyParser = require('body-parser');
const labRoutes = require('./routes/labRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(Cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', labRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
