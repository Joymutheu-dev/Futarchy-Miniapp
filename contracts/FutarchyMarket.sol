// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FutarchyMarket {
    mapping(address => uint256) public stakes;
    uint256 public totalStake;
    bool public marketResolved;
    uint256 public followerTarget;
    address public owner;

    event Staked(address indexed user, uint256 amount);
    event MarketResolved(bool achieved);

    constructor(uint256 _followerTarget) {
        followerTarget = _followerTarget;
        owner = msg.sender;
    }

    function stakePrediction() public payable {
        require(!marketResolved, "Market is closed");
        require(msg.value > 0, "Stake must be greater than 0");
        stakes[msg.sender] += msg.value;
        totalStake += msg.value;
        emit Staked(msg.sender, msg.value);
    }

    function resolveMarket(bool achieved) public {
        require(msg.sender == owner, "Only owner can resolve");
        require(!marketResolved, "Market already resolved");
        marketResolved = true;
        emit MarketResolved(achieved);
        // Note: Add reward distribution logic based on outcome
    }

    function withdraw() public {
        require(marketResolved, "Market not yet resolved");
        uint256 amount = stakes[msg.sender];
        require(amount > 0, "No stake to withdraw");
        stakes[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}