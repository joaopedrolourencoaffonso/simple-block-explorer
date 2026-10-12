const { chamada } = require("./chamada");

async function main() {
  console.log(await chamada("eth_blockNumber"));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});