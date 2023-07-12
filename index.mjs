import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/d2analyzer/search', async (req, res) => {
  const url = 'https://www.bungie.net/platform/Destiny2/SearchDestinyPlayerByBungieName/All/';
  const apiKey = process.env.API_KEY;
  const displayName = req.body.displayName;
  const displayNameCode = req.body.dsiplayNameNum;

  try{
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        displayName: displayName,
        displayNameCode: displayNameCode
      })
    });
    if(response.ok){
      const data = await response.json();
      res.json(data);
    }
    else{
      console.error(`Request failed with status ${response.status}`);
      res.status(response.status).send('Request failed');
    }
    
  }
  catch(error){
    console.error('Error: ', error);
  }

});