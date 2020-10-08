const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("CampaignFactory");

module.exports = function(deployer, accounts) {
    deployer.deploy(Campaign(1000));
    deployer.deploy(CampaignFactory);
}
