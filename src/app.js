const path = require('path');
const express = require('express');
require("dotenv").config({ path: ".env" });
const url = process.env.RPC_NODE;
const { chamada } = require("./CLI/chamada");

//const apiRouter = require('./api');
const app = express();
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.get('/blocks', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'blocks.html'));
})

app.get('/txs', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'transactions.html'));
})

// Rota para um bloco específico (ex: /block/1234)
app.get('/block/:blockNumber', (req, res) => {
    const blockNumber = req.params.blockNumber;
    // Renderiza a view e passa a variável diretamente
    res.render('detalhes-bloco', { blockNumber });
});

// Rota para uma transação específica (ex: /tx/0x2873293...)
app.get('/tx/:txHash', (req, res) => {
    const txHash = req.params.txHash;
    
    res.render('detalhes-tx', { txHash });
});

app.get('/chamadas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'chamadas.html'));
})

module.exports = app;
