var rpcURLs = {
  1: "https://mainnet.infura.io/v3/578bf4e7e0904a5aa9908fd9d5e6d181", //Ethereum Mainnet
  5: "https://goerli.infura.io/v3/578bf4e7e0904a5aa9908fd9d5e6d181", //Görli
  56: "https://bsc-dataseed1.binance.org/", //Binance Smart Chain Mainnet
  97: "https://data-seed-prebsc-1-s1.binance.org:8545/", //Binance Smart Chain Testnet
  137: "https://polygon-rpc.com", //Polygon Mainnet
  80001: "https://rpc-mumbai.maticvigil.com/", //Mumbai
};

window.addEventListener("load", function () {
  if (typeof web3 !== "undefined") {
    console.log("Web3 Detected! " + web3.currentProvider.constructor.name);
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log("No Web3 Detected... using HTTP Provider");
    window.web3 = new Web3(new Web3.providers.HttpProvider(rpcURLs[1]));
  }
});

function getChainId() {
  return web3.eth.getChainId().then(console.log);
}

function changeNetwork(chainId) {
  console.log("changing Network...");
  window.web3 = new Web3(new Web3.providers.HttpProvider(rpcURLs[chainId]));
}
