const path = require('path');
const express = require('express');
require("dotenv").config({ path: ".env" });
const url = process.env.RPC_NODE;
const { chamada } = require("./CLI/chamada");

//const apiRouter = require('./api');
const app = express();
app.use(express.json());

// Serve the static dashboard from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Mount all JSON-RPC backed endpoints under /api
app.post("/api", async (req, res) => {
  console.log("Received JSON-RPC request:", req.body);

  try {
    const result = await chamada(req.body);
    // Send the successful result back to the user
    return res.json(result);
  } catch (error) {
    console.error("Error:", error.message);
    // Send an error response so the client doesn't hang indefinitely
    return res.status(500).json({ error: error.message });
  }
});

// Basic health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/chamadas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'chamadas.html'));
})

module.exports = app;
