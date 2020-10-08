const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("Campaign");

module.exports = function(deployer) {
    deployer.deploy(Campaign);
    deployer.deploy(CampaignFactory);
}
