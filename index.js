const app = require('./src/app');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Blockchain visualizer running at http://127.0.0.1:${PORT}`);
});