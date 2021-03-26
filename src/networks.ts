import { BTC_NETWORKS } from './btc_networks'

export const NETWORKS = [
  {
    name: 'BTC - Bitcoin',
    network: BTC_NETWORKS.bitcoin.default,
    hd_coin: 0,
  },
  {
    name: 'tBTC - Bitcoin Testnet',
    network: BTC_NETWORKS.bitcoin.p2wpkh.testnet,
    hd_coin: 1,
  },
  {
    name: 'BCH - Bitcoin Cash',
    network: BTC_NETWORKS.bitcoin.default,
    hd_coin: 145,
  },
  {
    name: 'tBCH - Bitcoin Cash Testnet',
    network: BTC_NETWORKS.bitcoin.default,
    hd_coin: 145,
  },
  {
    name: 'ETH - Ethereum',
    network: BTC_NETWORKS.bitcoin.default,
    hd_coin: 60,
  },
  {
    name: 'ETH - Ethereum Testnet',
    network: BTC_NETWORKS.bitcoin.default,
    hd_coin: 60,
  },
]
