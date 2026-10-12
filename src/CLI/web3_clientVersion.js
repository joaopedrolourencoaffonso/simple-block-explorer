const { chamada } = require("./chamada");

async function main() {
  console.log(await chamada("web3_clientVersion"));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});