// pragma solidity >=0.5.10 <0.7.0;
pragma solidity 0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Awarding is ERC721 {
    
    uint value;
    address tokenOwner;
    
    constructor() ERC721("Con","CON")  public {
        // value = msg.value;
        tokenOwner = msg.sender;
    }

    mapping(string => bool) Text;
    Con[] public Token;
    
    struct Con{
        uint256 id;
        uint256 level;
    }

    event Success(address reciever , uint lenght);
    event Awarded(address revieber , uint level , uint tokenId);
    
    modifier ownership {
           require(msg.sender != tokenOwner,"permission not granted");
           _;
    }
    
    function Mint( address reciever,string memory news) public ownership {
        // require(!Text[news],"Information already recorded.");

        uint id = Token.length;
        Token.push(Con(id,0));
        _mint(reciever,id);
        Text[news] = true;
        emit Success(reciever,id);
    }
    
    function AwardUser(address reciever,string memory text,uint256 tokenId) public ownership {
            require(tokenId <= Token.length,"Invalid TokenId");
            if(tokenId < 0)
                Mint(reciever,text);
            else    
                Award(reciever,text,tokenId);
    }

    function Award(address reciever,string memory text,uint256 tokenId) private {
        Con storage token = Token[tokenId];
        Text[text] = true;
        token.level += 1;
        emit Awarded(reciever,token.level,tokenId);
    }
}