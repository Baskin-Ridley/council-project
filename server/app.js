const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv').config();

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client'), {
  setHeaders: (res, filepath) => {
    if (filepath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filepath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filepath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    } else if (filepath.endsWith('.jpg') || filepath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    }
  }
}));

// Start the server
const PORT = process.env.PORT || 8080;

module.exports = app;
