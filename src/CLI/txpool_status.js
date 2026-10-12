const { chamada } = require("./chamada");

async function main() {
  console.log(await chamada("txpool_status"));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});