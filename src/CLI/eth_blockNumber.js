require("dotenv").config({ path: ".env" });
const url = process.env.RPC_NODE;

async function main() {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "eth_blockNumber",
      params: [],
      id: 1,
      jsonrpc: "2.0",
    }),
  });

  const data = await response.json();

  console.log(data);
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exitCode = 1;
});