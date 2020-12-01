var ExameMedico = artifacts.require("./ExameMedico.sol");

module.exports = function(deployer) {
  deployer.deploy(ExameMedico);
};
