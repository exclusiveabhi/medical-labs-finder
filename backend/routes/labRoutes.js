const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// yaha replace krna hai apna google api key se !
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
// Endpoint yeh rha /api/health-labs/:city
router.get('/health-labs/:city', async (req, res) => {
  const city = req.params.city;
  try {
    // Request to Google Places API for health-related businesses in the city
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query: `health labs in ${city}`,
        key: GOOGLE_API_KEY
      }
    });

    // Extract the health labs from the API response
    const healthLabs = response.data.results.map(lab => ({
      name: lab.name,
      address: lab.formatted_address,
      service: lab.types.join(', '), // Listing types of services (e.g., laboratory, health)
      phone: lab.formatted_phone_number || 'Not Available' // This field may not always be available
    }));

    if (healthLabs.length === 0) {
      return res.status(404).json({ message: 'No health labs found in this city.' });
    }

    res.status(200).json(healthLabs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
