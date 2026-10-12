const { chamada } = require("./chamada");
const method = process.argv[2];
const entrada = process.argv[3];

async function main() {
  if (!method) {
    console.error("Usage: npm run method -- <method>");
    process.exit(1);
  }

  //console.log(entrada)
  const lista_de_entradas = JSON.parse(entrada);

  json_para_envio = {
      method: method,
      jsonrpc: "2.0",
      params: lista_de_entradas,
      id: 1,
  };

  console.log(await chamada(json_para_envio));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});