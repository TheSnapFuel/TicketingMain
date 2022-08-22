<a name="readme-top"></a>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TheSnapFuel/TicketingMain">
    <img src="public/images/icons/snap.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Snap Fuel</h3>

  <p align="center">
    A revolutionary ticket marketplace built on the MATIC blockchain.
    <br />
    <a href="https://thesnapfuel.com/">View Demo</a>

  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://thesnapfuel.com/)

We wanted to make a product that helps in migrating internet users from Web2 space to Web3 since Web3 is the future of the internet. We wanted to do this by integrating a Web3 approach into a new and famous web2 application. In our case, we picked a booking platform that sells tickets in the form of NFTs. We want to revolutionize web3 by being the first web3 company that even people with no knowledege of blockchain can use easily.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Next.js
* Hardhat
* Solidity
* Web3.js
* IPFS
* Tailwind
* Spheron 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

How to get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node.js
* yarn
  ```sh
    npm install --global yarn
  ```
* Metamask


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TheSnapFuel/TicketingMain.git
   ```
2. Install yarn packages
   ```sh
   yarn install
   ```
3. Open one terminal and run the following command to start the local blockchain
   ```sh
   npx hardhat node
   ```
4. Open another terminal and run the following command to deploy the smart contract
   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```
5. Start the local server
   ```sh
   yarn start
   ```
6. Open the browser and go to http://localhost:3000/

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Team

Asim Jawahir - Blockchain/Backend Developer
Rahul Pujari - Product Lead. Designer
Nevan D'Souza - Frontend Developer


<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: public/images/screenshot.png