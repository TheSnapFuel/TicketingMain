// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract MassEvent is ERC1155, Ownable {

    mapping(uint256 => uint256) ticketsPerEvent;
    mapping(uint256 => uint256) ticketsIDStart;
    mapping(uint256 => uint256) pricePerEvent;
    uint totalTickets = 0;

    address public ownerAddr;
    uint256 listingPrice = 0.025 ether;
    using Counters for Counters.Counter;
    Counters.Counter private _eventIds;

    constructor() ERC1155(" ") {
        ownerAddr = msg.sender;
    }

    mapping(uint256 => EventItem) private idToEventItem;

    struct EventItem {
        uint256 eventId;
        uint256 price;
        uint256 ticketsIDStart;
        uint256 ticketsCount;
    }
    function addEvent(string memory updatedURI, uint256 numTickets, uint256 price) public payable returns (uint) {
        require(price > 0);
        // require(msg.value == listingPrice*numTickets);
        idToEventItem[_eventIds.current()] = EventItem(
            _eventIds.current(),
            price,
            totalTickets,
            numTickets
        );
        for (uint i = 0; i < numTickets; i++) {
            _mint(ownerAddr, totalTickets + i, 1, "");
        }
        totalTickets += numTickets;
        pricePerEvent[_eventIds.current()] = price;
        ticketsPerEvent[_eventIds.current()] = numTickets;
        _setURI(updatedURI);
        _eventIds.increment();
        // mint totalTickets tokens to the contract


        return _eventIds.current();
    }

    function fetchEvents() public view returns(EventItem[] memory)
    {
        uint itemCount = _eventIds.current();
        uint currentIndex = 0;

        EventItem[] memory items = new EventItem[](itemCount);

        for (uint i = 0; i < itemCount; i++)
        {
            items[currentIndex] = idToEventItem[i];
            currentIndex++;
        }
        return items;
    }
    function buyTicket(uint256 ticketId) public payable {
        // safeTransferFrom(ownerAddr, msg.sender, ticketId, 1, "0x0");
    }

    function fetchUserTickets(address user) public view returns(uint256[] memory) {
        uint256[] memory userTickets = new uint256[](totalTickets);
        uint256 userTicketsCount = 0;
        for (uint i = 0; i < totalTickets; i++) {
            if (balanceOf(user, i) == 1) {
                userTickets[userTicketsCount] = i;
                userTicketsCount++;
            }
        }
        return userTickets;
    }
    function getEventTickets(uint eventId) public view returns (uint) {
        return ticketsPerEvent[eventId];
    }

    function getTotalTickets() public view returns (uint) {
        return totalTickets;
    }

    function getEvents() public view returns (uint) {
        return _eventIds.current();
    }

    function getListingPrice() public view returns (uint256) {
      return listingPrice;
    }

}