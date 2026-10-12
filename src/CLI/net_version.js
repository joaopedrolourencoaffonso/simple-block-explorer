const { chamada } = require("./chamada");

async function main() {
  console.log(await chamada("net_version"));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});