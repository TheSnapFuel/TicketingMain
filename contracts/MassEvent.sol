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

    uint256 listingPrice = 0.025 ether;
    using Counters for Counters.Counter;
    Counters.Counter private _eventIds;

    constructor() ERC1155(" ") {
    }

    function addEvent(string memory updatedURI, uint256 numTickets, uint256 price) public payable returns (uint) {
        ticketsIDStart[_eventIds.current()] = totalTickets;
        totalTickets += numTickets;
        pricePerEvent[_eventIds.current()] = price;
        ticketsPerEvent[_eventIds.current()] = numTickets;       
        _setURI(updatedURI);
        _eventIds.increment();

        return _eventIds.current();
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