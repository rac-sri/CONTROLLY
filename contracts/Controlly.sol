pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Controlly is ERC721 {
    constructor() ERC721("Controlly","CONTROLLY") public {}

    mapping(string => bool) Text;
    string[] public Token;

    function Mint(string memory news) public {
        require(!Text[news],"Information already recorded.");
        Token.push(news);
        uint id = Token.length;
        _mint(msg.sender,id);
        Text[news] = true;
    }
}