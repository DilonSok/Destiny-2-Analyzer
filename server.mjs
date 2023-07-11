// server.js
import express from 'express';
import {router} from './public/js/search.js';
const app = express();
const port = 3000;

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static files
app.use(express.static('public'));

// Define the search route
app.use('/api/search', router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
