const { chamada } = require("./chamada");
const method = process.argv[2];

async function main() {
  if (!method) {
    console.error("Usage: npm run method -- <method>");
    process.exit(1);
  }

  json_para_envio = {
      method: method,
      params: [],
      id: 1,
      jsonrpc: "2.0",
  };

  console.log(await chamada(json_para_envio));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});