pragma solidity ^0.5.0;

contract ExameMedico {
    struct Exame {
        string hash;
        string nome;
        uint data;
    }

    mapping(address => Exame[]) exames;

    function add(string memory _hash, string memory _nome, uint _data) public {
        exames[msg.sender].push(Exame({
            hash: _hash,
            nome: _nome,
            data: _data
        }));
    }

    function get(uint _index) public view returns(string memory, string memory, uint) {
        Exame memory exame = exames[msg.sender][_index];
        return(exame.hash, exame.nome, exame.data);
    }

    function getTam() public view returns(uint) {
        return exames[msg.sender].length;
    }
    
}