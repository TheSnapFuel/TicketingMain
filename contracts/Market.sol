pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract Market is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.025 ether;
    address payable owner;

    mapping(uint256 => Ticket) private idToTicket;

    struct Ticket {
      uint256 tokenId;
      address payable seller;
      address payable owner;
      uint256 price;
      bool sold;
    }

    event TicketCreated (
      uint256 indexed tokenId,
      address seller,
      address owner,
      uint256 price,
      bool sold
    );

    constructor() ERC721("SnapFuel Tokens", "SNAP") {
      owner = payable(msg.sender);
    }

    /* Mints a token and lists it in the marketplace */
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
      _tokenIds.increment();
      uint256 newTokenId = _tokenIds.current();

      _mint(msg.sender, newTokenId);
      _setTokenURI(newTokenId, tokenURI);
      createTicket(newTokenId, price);
      return newTokenId;
    }

    function createTicket(
      uint256 tokenId,
      uint256 price
    ) private {
      require(price > 0, "Price must be at least 1 wei");
      require(msg.value == listingPrice, "Price must be equal to listing price");

      idToTicket[tokenId] =  Ticket(
        tokenId,
        payable(msg.sender),
        payable(address(this)),
        price,
        false
      );

      _transfer(msg.sender, address(this), tokenId);
      emit TicketCreated(
        tokenId,
        msg.sender,
        address(this),
        price,
        false
      );
    }

    function getListingPrice() public view returns (uint256) {
      return listingPrice;
    }

    function fetchTickets() public view returns (Ticket[] memory) {
      uint itemCount = _tokenIds.current();
      uint unsoldItemCount = _tokenIds.current() - _itemsSold.current();
      uint currentIndex = 0;

      Ticket[] memory items = new Ticket[](unsoldItemCount);
      for (uint i = 0; i < itemCount; i++) {
        if (idToTicket[i + 1].owner == address(this)) {
          uint currentId = i + 1;
          Ticket storage currentItem = idToTicket[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyTickets() public view returns (Ticket[] memory) {
      uint totalItemCount = _tokenIds.current();
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (idToTicket[i + 1].owner == msg.sender) {
          itemCount += 1;
        }
      }

      Ticket[] memory items = new Ticket[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToTicket[i + 1].owner == msg.sender) {
          uint currentId = i + 1;
          Ticket storage currentItem = idToTicket[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }
}