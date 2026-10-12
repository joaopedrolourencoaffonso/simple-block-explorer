const { chamada } = require("./chamada");

async function main() {
  console.log(await chamada("net_listening"));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});