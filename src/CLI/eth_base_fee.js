const { chamada } = require("./chamada");

async function main() {
  console.log(await chamada("eth_base_fee"));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});