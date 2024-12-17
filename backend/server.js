const express = require('express');
const axios = require('axios');
const cors = require('cors');
// const Cors = require('cors');
const bodyParser = require('body-parser');
const labRoutes = require('./routes/labRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(Cors());
app.use(cors());

app.use(bodyParser.json());

app.use('/api', labRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
