require("dotenv").config();
const ethers = require('ethers');
(async () => {
	const node = 'https://saturn-rpc.swanchain.io'    //your rpc
const provider = new ethers.providers.JsonRpcProvider(node);

const privatekey = 'your private key'
    const signer = new ethers.Wallet(privatekey, provider);

      const tx = await signer.sendTransaction({
        to: '0x111111111111111111111111111111',
        value: ethers.utils.parseUnits('0.0000000002', 'ether'),
		gasLimit : 22000,
		gasPrice : ethers.utils.parseUnits(`0.00000007`, 'gwei'),
      });
      console.log(tx);
})();
