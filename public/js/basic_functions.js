async function enviar(metodo, params) {
    console.log("Sending request to RPC node:", metodo, params);

    const response = await fetch("/api", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: `{"method": "${metodo}","params": ${params},"id": 1,"jsonrpc": "2.0"}`,
    });
    const data = await response.json();
    
    return data;
}

function paginaBloco() {
    let bloco = document.getElementById("barraDePesquisaBloco").value;
    console.log(bloco);

    window.open(`http://127.0.0.1:3000/block/${bloco}`)
}

function paginaTx() {
    let bloco = document.getElementById("barraDePesquisaTx").value;
    console.log(bloco);

    window.open(`http://127.0.0.1:3000/tx/${bloco}`)
}