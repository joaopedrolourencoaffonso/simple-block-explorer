require("dotenv").config({ path: ".env" });
const url = process.env.RPC_NODE;

async function chamada(method) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: method,
      params: [],
      id: 1,
      jsonrpc: "2.0",
    }),
  });

  const data = await response.json();

  //console.log(data);
  return data
}

module.exports = { chamada };