
pragma solidity >=0.4.21 <0.7.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract DaiTokenMock is ERC20Mintable {
  string public name;
  string public symbol;
  uint256 public decimals;

  constructor() public {
    name = "Day Stablecoin (DAY)";
    symbol = "DAY";
    decimals = 18; // cuantos ceros
  }
}
