// pragma solidity >=0.5.10 <0.7.0;
pragma solidity 0.6.2;

//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Awarding is ERC721 {
    uint256 value;
    address tokenOwner;

    constructor() public ERC721("Con", "CON") {
        // value = msg.value;
        tokenOwner = msg.sender;
    }

    mapping(string => bool) Text;
    Con[] public Token;

    struct Con {
        uint256 id;
        uint256 level;
    }

    event Success(address reciever, uint256 lenght);
    event Awarded(address revieber, uint256 level, uint256 tokenId);

    modifier ownership {
        require(msg.sender == tokenOwner, "permission not granted");
        _;
    }

    function Mint(address reciever, string memory news)
        internal
        returns (string memory str)
    {
        // require(!Text[news],"Information already recorded.");

        uint256 id = Token.length;
        Token.push(Con(id, 0));
        _mint(reciever, id);
        Text[news] = true;
        emit Success(reciever, id);
        return "success";
    }

    function AwardUser(
        address reciever,
        string memory text,
        int256 tokenId
    ) public ownership returns (string memory result) {
        require(tokenId < int256(Token.length), "Invalid TokenId");
        require(!Text[text], "Text already exists");

        if (tokenId < 0) {
            string memory returnValue = Mint(reciever, text);
            return returnValue;
        } else {
            string memory returnValue = Award(reciever, text, uint256(tokenId));
            return returnValue;
        }
    }

    function Award(
        address reciever,
        string memory text,
        uint256 tokenId
    ) private returns (string memory str) {
        Con storage token = Token[tokenId];
        Text[text] = true;
        token.level += 1;
        emit Awarded(reciever, token.level, tokenId);
        return "success";
    }

    function getOnwer() public view returns (address token) {
        return tokenOwner;
    }

    function checkText(string memory text) public view returns (bool truthy) {
        return Text[text];
    }
}
