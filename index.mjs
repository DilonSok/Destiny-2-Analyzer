import fetch from 'node-fetch';
import express from 'express';
import Datastore from 'nedDb';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('datastore.db');
database.loadDataBase();

//Request for name search (ex. Waffle#4915)
app.post('/d2wrapped/searchName', async (req, res) => {
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


app.post;

//getting characterIds
app.get('/d2wrapped/getCharacters', async (req, res) => {

  const membershipType = req.body.membershipType;
  const destinyMembershipId = req.body.destinyMembershipId;
  const components = req.body.component;
  const url = `https://www.bungie.net/platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?component=${components}`;
  const apiKey = process.env.API_KEY;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        destinyMembershipId: membershipId,
        membershipType: membershipType,
        component: Characters
      })
    });
    if (response.ok) {
      const data = await response.json();
      res.json(data);
    }
    else {
      console.error(`Request failed with status ${response.status}`);
      res.status(response.status).send('Request failed');
    }

  }
  catch (error) {
    console.error('Error: ', error);
  }

});

app.get;

//get historical data
app.get('/d2wrapped/getHistoricalData', async (req, res) => {

  const membershipType = req.body.membershipType;
  const destinyMembershipId = req.body.destinyMembershipId;
  const components = req.body.component;
  const url = `https://www.bungie.net/platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`;
  const apiKey = process.env.API_KEY;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        destinyMembershipId: membershipId,
        membershipType: membershipType,
      })
    });
    if (response.ok) {
      const data = await response.json();
      res.json(data);
      //load data into database?
    }
    else {
      console.error(`Request failed with status ${response.status}`);
      res.status(response.status).send('Request failed');
    }

  }
  catch (error) {
    console.error('Error: ', error);
  }

});

