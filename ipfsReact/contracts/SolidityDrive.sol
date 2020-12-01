pragma solidity ^0.5.0;

contract SolidityDrive {
    struct File {
        string hash;
        string fileName;
        string fileType;
        uint date;
    }

    mapping(address => File[]) files;

    function add(string memory _hash, string memory _filename, string memory _fileType, uint _date) public {
        files[msg.sender].push(File({
            hash: _hash,
            fileName: _filename,
            fileType: _fileType,
            date: _date
        }));
    }

    function get(uint _index) public view returns(string memory, string memory, string memory, uint) {
        File memory file = files[msg.sender][_index];
        return(file.hash, file.fileName, file.fileType, file.date);
    }

    function getLength() public view returns(uint) {
        return files[msg.sender].length;
    }
}