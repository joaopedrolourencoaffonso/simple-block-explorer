const path = require('path');
const express = require('express');
const apiRouter = require('./api');
const app = express();

app.use(express.json());

// Serve the static dashboard from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Mount all JSON-RPC backed endpoints under /api
app.use('/api', apiRouter);

// Basic health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/block_details', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'block_details.html'));
})

app.get('/block_details/:number', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'block_details.html'));
})

app.get('/blockTransactions/:number', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'blockTransactions.html'));
})

app.get('/transaction/:hash', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'transaction.html'));
})

app.get('/visualizarLogs', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'getLogs.html'));
})
 

module.exports = app;