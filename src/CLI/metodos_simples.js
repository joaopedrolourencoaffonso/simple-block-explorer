const { chamada } = require("./chamada");
const method = process.argv[2];

async function main() {
  if (!method) {
    console.error("Usage: npm run method -- <method>");
    process.exit(1);
  }

  console.log(await chamada(method));
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});