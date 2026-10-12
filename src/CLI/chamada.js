require("dotenv").config({ path: ".env" });
const url = process.env.RPC_NODE;

async function chamada(json_para_envio) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json_para_envio),
  });

  const data = await response.json();

  //console.log(data);
  return data
}

module.exports = { chamada };