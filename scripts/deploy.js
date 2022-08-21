const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const MassEvent = await hre.ethers.getContractFactory("MassEvent");
  const massEvent = await MassEvent.deploy();
  await massEvent.deployed();
  console.log("massEvent deployed to:", massEvent.address);

  fs.writeFileSync('./config.js', `
  export const massEventAddress = "${massEvent.address}"
  `)
  fs.writeFileSync('./ticketData.json', '{}')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });