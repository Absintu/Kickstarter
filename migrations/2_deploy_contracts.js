const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("CampaignFactory");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Campaign, "1000", accounts[0]);
    deployer.deploy(CampaignFactory);
}
