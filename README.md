# simple-block-explorer

Um explorar de blocos simples para redes ethereum.

# Métodos a implementar como script

# Métodos simples

- [X] eth_blockNumber
- [X] eth_chainId
- [X] eth_gasPrice 
- [X] eth_syncing
- [X] eth_base_fee
- [X] net_peerCount
- [X] net_listening
- [X] net_version
- [X] web3_clientVersion
- [X] txpool_content
- [X] txpool_status
- [X] eth_max_priority_fee_per_gas

## Com input

- [X] web3_sha3
- [X] eth_getBalance
- [X] eth_getBlockByHash
- [X] eth_getBlockByNumber
- [X] eth_getBlockReceipts
- [X] eth_getBlockTransactionCountByHash 
- [X] eth_getBlockTransactionCountByNumber 

## Precisam de Input

- [ ] eth_getTransactionByBlockHashAndIndex
- [ ] eth_getTransactionByBlockNumberAndIndex
- [ ] eth_getTransactionByHash
- [ ] eth_getTransactionCount
- [ ] eth_getTransactionReceipt
- [ ] eth_estimateGas
- [ ] eth_call
- [ ] eth_getCode
- [ ] eth_getLogs

# Exemplo de como usar a CLI

```bash
$ npm run eth_blockNumber

> simple-block-explorer@1.0.0-rc.5 eth_blockNumber
> node src/CLI/metodos_simples.js eth_blockNumber

◇ injected env (3) from .env // tip: ⌘ suppress logs { quiet: true }
{ jsonrpc: '2.0', id: 1, result: '0x262' }
$ 
$ # garanta que esteja tudo entre aspas simples para marcar como _uma_ string
$ npm run eth_getBalance '["0x71562b71999873DB5b286dF957af199Ec94617F7","latest"]'

> simple-block-explorer@1.0.0-rc.5 eth_getBalance
> node src/CLI/metodos_um_input.js eth_getBalance ["0x71562b71999873DB5b286dF957af199Ec94617F7","latest"]

◇ injected env (3) from .env // tip: ⌘ suppress logs { quiet: true }
{
  jsonrpc: '2.0',
  id: 1,
  result: '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7'
}
```

## Fazendo transferência com o próprio geth

```bash
$ ../geth/geth attach ../geth/devnet/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.17.8-stable-a5790770/linux-amd64/go1.27.1
at block: 956 (Mon Oct 12 2026 20:33:43 GMT-0300 (-03))
 datadir: /home/joao/geth/devnet
 modules: admin:1.0 debug:1.0 dev:1.0 eth:1.0 miner:1.0 net:1.0 rpc:1.0 testing:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or type exit
> eth.sendTransaction({from: "0x71562b71999873DB5b286dF957af199Ec94617F7",to:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",value: web3.toWei(10, "ether")});
"0x07fac3f3d3bf74ed24e8be1b43b3dc15a97688241d0637a3c3c891fe5ad33302"
```

# Usando hardhat para testes

1. Opções default:

```
npm install hardhat
```

2. Init com opções default

```
npx hardhat --init
```

3. Executa deploy:

```
$ npx hardhat ignition deploy ignition/modules/Counter.ts --network local
✔ Confirm deploy to network local (1337)? … yes
Hardhat Ignition 🚀

Deploying [ CounterModule ]

Batch #1
Batch #1
  Executed CounterModule#Counter

Batch #2
  Executed CounterModule#Counter.incBy

[ CounterModule ] successfully deployed 🚀

Deployed Addresses

CounterModule#Counter - 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

4. npm install ethers

5. 