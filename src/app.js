const path = require('path');
const express = require('express');
require("dotenv").config({ path: ".env" });
const url = process.env.RPC_NODE;

//const apiRouter = require('./api');
const app = express();
app.use(express.json());

// Serve the static dashboard from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Mount all JSON-RPC backed endpoints under /api
app.post("/api", (req, res) => {
  res.json(req.body);
  console.log("Received JSON-RPC request:", req.body);
});

// Basic health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/chamadas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'chamadas.html'));
})

module.exports = app;
