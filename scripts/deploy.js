const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Market = await hre.ethers.getContractFactory("Market");
  const market = await Market.deploy();
  await market.deployed();
  console.log("market deployed to:", market.address);

  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${market.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });