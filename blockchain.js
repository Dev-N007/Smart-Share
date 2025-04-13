const contractAddress = "0x2352364dFbce5d352131De8302Cb9e4E9c6c674F";
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "BonusClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "ItemBought",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "enum SmartBarter.Size",
          "name": "size",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ItemListed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ItemRelisted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "itemId",
          "type": "uint256"
        }
      ],
      "name": "buyItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimBonus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "items",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "enum SmartBarter.Size",
          "name": "size",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isListed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "largePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "enum SmartBarter.Size",
          "name": "size",
          "type": "uint8"
        }
      ],
      "name": "listItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mediumPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextItemId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "registered",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "itemId",
          "type": "uint256"
        }
      ],
      "name": "relistItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "smallPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewItems",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "enum SmartBarter.Size",
              "name": "size",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isListed",
              "type": "bool"
            }
          ],
          "internalType": "struct SmartBarter.Item[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

    let provider, signer, contract;

    async function connectWallet() {
      try {
        if (!window.ethereum) {
          alert("MetaMask not found");
          return;
        }

        await window.ethereum.request({ method: "eth_requestAccounts" });
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        const address = await signer.getAddress();
        document.getElementById("walletAddress").innerText = "Wallet: " + address;

        await loadContract();
        await loadItems();
        await checkBalance();
      } catch (err) {
        alert("Connection failed: " + err.message);
      }
    }

    async function loadContract() {
      const response = await fetch('./abi/SmartBarter.json'); // Ensure ABI path is correct
      const abi = await response.json();
      contract = new ethers.Contract(contractAddress, abi, signer);
    }

    async function listItem() {
      const name = document.getElementById("itemName").value;
      const size = parseInt(document.getElementById("itemSize").value);

      try {
        const tx = await contract.listItem(name, size);
        await tx.wait();
        alert("Item listed! You earned BARTER tokens.");
        await loadItems();
        await checkBalance();
      } catch (err) {
        alert("Failed to list item: " + err.message);
      }
    }

    async function loadItems() {
      try {
        const items = await contract.viewItems();
        const container = document.getElementById("itemsList");
        container.innerHTML = "";

        const signerAddress = await signer.getAddress();

        for (const item of items) {
          const price = ethers.utils.formatUnits(item.price, 18);
          const itemDiv = document.createElement("div");
          itemDiv.className = "item";

          let actionButton = "";
          if (item.isListed && item.owner.toLowerCase() !== signerAddress.toLowerCase()) {
            actionButton = `<button onclick="buyItem(${item.id})">Buy</button>`;
          } else if (!item.isListed && item.owner.toLowerCase() === signerAddress.toLowerCase()) {
            actionButton = `<button onclick="relistItem(${item.id})">Re-list</button>`;
          }

          itemDiv.innerHTML = `
            <strong>${item.name}</strong><br>
            Size: ${["Small", "Medium", "Large"][item.size]}<br>
            Price: ${price} BARTER<br>
            Owner: ${item.owner}<br>
            Listed: ${item.isListed}<br>
            ${actionButton}
          `;
          container.appendChild(itemDiv);
        }
      } catch (err) {
        console.error(err);
        document.getElementById("itemsList").innerText = "Failed to load items.";
      }
    }

    async function buyItem(itemId) {
      try {
        const tx = await contract.buyItem(itemId);
        await tx.wait();
        alert("Item bought!");
        await loadItems();
        await checkBalance();
      } catch (err) {
        alert("Purchase failed: " + err.message);
      }
    }

    async function relistItem(itemId) {
      try {
        const tx = await contract.relistItem(itemId);
        await tx.wait();
        alert("Item re-listed!");
        await loadItems();
      } catch (err) {
        alert("Failed to re-list item: " + err.message);
      }
    }

    async function claimBonus() {
      try {
        document.getElementById("bonusStatus").innerText = "Claiming bonus...";
        const tx = await contract.claimBonus();
        await tx.wait();
        document.getElementById("bonusStatus").innerText = "✅ 500 BARTER claimed successfully!";
        await checkBalance();
      } catch (err) {
        console.error(err);
        document.getElementById("bonusStatus").innerText = "❌ Bonus claim failed: " + err.message;
      }
    }

    async function checkBalance() {
      try {
        const address = await signer.getAddress();
        const balance = await contract.balanceOf(address);
        const formatted = ethers.utils.formatUnits(balance, 18);
        document.getElementById("balanceDisplay").innerText = `Balance: ${formatted} BARTER`;
      } catch (err) {
        console.error(err);
        document.getElementById("balanceDisplay").innerText = "❌ Could not fetch balance.";
      }
    }

  
