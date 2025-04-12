# Smart-Share

Smartshare is a peer-to-peer barter trade platform that enables users to exchange goods and services based on a blockchain-based points system. It facilitates peer-to-peer exchanges, community value creation, and sustainable reuse — all without the use of traditional fiat currency.

Features

Sign up with an Ethereum wallet .

Post goods or services you wish to share.

Browse listings from other users.

Make trades using in-app points.

Accept, fulfill, or cancel trades securely through smart contracts.

Fair point system: rewarded for successful trades, penalties for unsuccessful ones.


Technology Stack


Frontend:
HTML / CSS / JavaScript

Ethers.js for blockchain interactions

MetaMask for wallet integration

Backend:

Solidity Smart Contract (Ethereum-compatible)

Deployed to Ethereum testnet (Sepolia)


Tools:

Hardhat (development)

Alchemy


Smart Contract Overview

Key Functions:

register() - Registers a new user with initial points

createListing(description) - Posts a new listing

initiateTrade(listingId) - Initiates trade on another user's listing

acceptTrade(tradeId) - Owner of listing accepts a trade

completeTrade(tradeId) - Either party completes the trade

cancelTrade(tradeId) - One or both parties cancel trade



Internal Currency:

All users begin with 100 points.

Successful trades return points with bonuses.

Cancelled trades can result in forfeited points.


---

Pages and UI Flow

1. Home Page - Intro + Wallet Connect

2. Dashboard - User points, listings, trade overview

3. Explore Page - View all active, public listings



How to Run Locally

1. Clone the repo

git clone https://github.com/yourusername/smartshare.git

cd smartshare

2. Install dependencies 

npm install

3. Deploy the smart contract using Hardhat

4. Update your frontend JavaScript with:

Your contract address

Your contract ABI

5. Run the HTML file in any browser with MetaMask enabled.



Limitations

Dispute Resolution: No integrated resolution for trade disputes.

UI Simplicity: Simple and experimental — future versions can add more visuals, media uploads, and user ratings.


abcd

Contributors

Developers: 

NILESH RAJ: UI/UX (frontend)

ABHINAV KUMAR RAI: Documentation, Presentation and Database

ABHIJEET ANAND: Blockchain

TARUN KHATOD: Database



Future Ideas

Reputation system

Chat between users

File uploads for listing images