// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

contract SmartBarter {
    // Token logic
    string public constant name = "Barter Token";
    string public constant symbol = "BARTER";
    uint8 public constant decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    // Item definitions
    enum Size { Small, Medium, Large }

    struct Item {
        uint id;
        string name;
        Size size;
        uint256 price;
        address owner;
        bool isListed;
    }

    mapping(uint => Item) public items;
    uint public nextItemId;

    mapping(address => bool) public registered;

    // Prices for item sizes
    uint256 public smallPrice = 10 * (10 ** uint256(decimals));
    uint256 public mediumPrice = 25 * (10 ** uint256(decimals));
    uint256 public largePrice = 50 * (10 ** uint256(decimals));

    event ItemListed(uint id, string name, Size size, uint256 price, address indexed owner);
    event ItemBought(uint id, address indexed buyer, address indexed seller, uint256 price);
    event ItemRelisted(uint id, address indexed owner);
    event BonusClaimed(address indexed user, uint256 amount);

    constructor() {
        _preloadItems();
    }

    modifier onlyRegistered() {
        if (!registered[msg.sender]) {
            balanceOf[msg.sender] = 100 * (10 ** uint256(decimals));
            totalSupply += balanceOf[msg.sender];
            registered[msg.sender] = true;
        }
        _;
    }

    function _getPrice(Size size) internal view returns (uint256) {
        if (size == Size.Small) return smallPrice;
        if (size == Size.Medium) return mediumPrice;
        return largePrice;
    }

    function listItem(string memory name_, Size size) external onlyRegistered {
        uint256 price = _getPrice(size);
        items[nextItemId] = Item(nextItemId, name_, size, price, msg.sender, true);
        emit ItemListed(nextItemId, name_, size, price, msg.sender);
        nextItemId++;

        // 🎁 Reward user for listing
        balanceOf[msg.sender] += price;
        totalSupply += price;
    }

    function relistItem(uint itemId) external onlyRegistered {
        Item storage item = items[itemId];
        require(item.owner == msg.sender, "You do not own this item");
        require(!item.isListed, "Item is already listed");

        item.isListed = true;
        emit ItemRelisted(itemId, msg.sender);
    }

    function viewItems() external view returns (Item[] memory) {
        Item[] memory allItems = new Item[](nextItemId);
        for (uint i = 0; i < nextItemId; i++) {
            allItems[i] = items[i];
        }
        return allItems;
    }

    function buyItem(uint itemId) external onlyRegistered {
        Item storage item = items[itemId];
        require(item.isListed, "Item not available");
        require(balanceOf[msg.sender] >= item.price, "Insufficient BARTER balance");

        address seller = item.owner;

        // Avoid balance change if buyer is the owner
        if (msg.sender != seller) {
            balanceOf[msg.sender] -= item.price;
            balanceOf[seller] += item.price;
        }

        item.isListed = false;
        item.owner = msg.sender;

        emit ItemBought(itemId, msg.sender, seller, item.price);
    }

    function claimBonus() external onlyRegistered {
        uint256 bonus = 500 * (10 ** uint256(decimals));
        balanceOf[msg.sender] += bonus;
        totalSupply += bonus;
        emit BonusClaimed(msg.sender, bonus);
    }

    function _preloadItems() internal {
        string[10] memory names = ["Chair", "Lamp", "Book", "Toy", "Cup", "Bag", "Watch", "Table", "Mirror", "Jacket"];
        Size[10] memory sizes = [Size.Small, Size.Small, Size.Medium, Size.Small, Size.Small, Size.Medium, Size.Small, Size.Large, Size.Medium, Size.Large];

        for (uint i = 0; i < 10; i++) {
            uint256 price = _getPrice(sizes[i]);
            items[nextItemId] = Item(nextItemId, names[i], sizes[i], price, address(this), true);
            emit ItemListed(nextItemId, names[i], sizes[i], price, address(this));
            nextItemId++;
        }
    }
}
