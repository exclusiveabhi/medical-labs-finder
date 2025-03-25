const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config(); 

router.get('/health-labs/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
      headers: {
        Authorization: process.env.FOURSQUARE_API_KEY,
      },
      params: {
        query: 'health labs',
        near: city,
        limit: 10,
      },
    });

    // Map the response data
    const healthLabs = response.data.results.map(lab => ({
      name: lab.name || 'Unknown Name',
      address: lab.location.formatted_address || 'Address not available',
      service: 'Health Lab', 
      phone: lab.tel || 'Not Available',
    }));

    if (healthLabs.length === 0) {
      return res.status(404).json({ message: `No health labs found in ${city}.` });
    }

    res.status(200).json(healthLabs);
  } catch (err) {
    console.error('Error fetching health labs:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;