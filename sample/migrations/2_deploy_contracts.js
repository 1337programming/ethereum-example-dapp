var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Conference = artifacts.require("./Conference.sol");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, Conference);
  deployer.deploy(MetaCoin);
  deployer.deploy(Conference);
};
