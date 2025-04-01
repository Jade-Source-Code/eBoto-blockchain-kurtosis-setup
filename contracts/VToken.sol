// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VToken {
    mapping(address => uint256) private balances;
    mapping(address => string) private ledger; // Store data for each user

    event Mint(address indexed to, uint256 amount);
    event DataStored(address indexed user, string data);

    function mint(address _to, uint256 _amount) public {
        balances[_to] += _amount;
        emit Mint(_to, _amount);
    }

    function storeData(string calldata _data) public {
        ledger[msg.sender] = _data;
        emit DataStored(msg.sender, _data);
    }

    function retrieveData(address _user) public view returns (string memory) {
        return ledger[_user];
    }

    function testNetwork() public pure returns (string memory) {
        bool beaconRunning = true; // Simulated check for beacon
        bool executionNodeRunning = true; // Simulated check for execution node
        bool consensusRunning = true; // Simulated check for consensus

        if (beaconRunning && executionNodeRunning && consensusRunning) {
            return "All network components are running.";
        } else {
            return "One or more network components are not running.";
        }
    }
}
