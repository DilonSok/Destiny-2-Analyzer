import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

router.post('/', async (req, res) => {
  try {
    const url = 'https://api.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/All';
    const apiKey = process.env.API_KEY;

    const displayName = req.body.displayName;
    const displayNameCode = req.body.displayNameCode;

    const payload = JSON.stringify({
      displayName: displayName,
      displayNameCode: displayNameCode
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: payload
    };

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData.Response);
      res.json(responseData.Response);
    } else {
      console.error(`Request failed with status ${response.status}`);
      res.status(response.status).send('Request failed');
    }
  } 
  catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('An error occurred');
  }
});

export {router};

