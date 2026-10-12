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

## Precisam de Input

- [ ] eth_estimateGas
- [ ] eth_getBlockTransactionCountByHash 
- [ ] eth_getBlockTransactionCountByNumber 
- [ ] eth_getCode
- [ ] eth_getFilterChanges
- [ ] eth_call
- [ ] eth_getFilterLogs
- [ ] eth_getLogs
- [ ] eth_getStorageAt 
- [ ] eth_getTransactionByBlockHashAndIndex
- [ ] eth_getTransactionByBlockNumberAndIndex 
- [ ] eth_getTransactionByHash
- [ ] eth_getTransactionCount
- [ ] eth_getTransactionReceipt
- [ ] eth_getUncleCountByBlockHash 
- [ ] eth_getUncleCountByBlockNumber
- [ ] eth_newBlockFilter
- [ ] eth_newFilter
- [ ] eth_newPendingTransactionFilter
- [ ] eth_sendRawTransaction
- [ ] eth_signTransaction
- [ ] eth_subscribe
- [ ] eth_uninstallFilter
- [ ] eth_unsubscribe
- [ ] eth_get_asset_balance


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