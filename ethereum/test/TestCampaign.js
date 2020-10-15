const Campaign = artifacts.require('Campaign');
const CampaignFactory = artifacts.require('CampaignFactory');

contract('Campaign', async(accounts) => {
    let factory;
    let campaign;
    let campaignAddress;

    beforeEach( async () => {
        campaign = await Campaign.deployed();
        factory = await CampaignFactory.deployed();
    });

    it('deploys a Campaign contract', async () => {
        await assert.ok(campaign.address);
    });

    it('deploys a CampaignFactory contract', async() => {
      await assert.ok(factory.address);
    });

    it('CampaignFactory creates a new Campaign and retrieves the array of campaigns', async() => {
      await factory.createCampaign(1001);
      [campaignAddress] = await factory.getDeployedCampaigns();
      await assert.ok(campaignAddress);
    });

    it('marks caller as the manager', async() => {
      const manager = await campaign.manager();
      assert.equal(manager, accounts[0]);
    });

    it('allows people to contribuite money and marks them as approvers', async() => {
      await campaign.contribute.sendTransaction({
          value: '1001', /// minimumContribution = 1000
          from: accounts[1]
      });
      const isContributor = await campaign.approvers(accounts[1]);
      assert(isContributor);
    });

    it('requires a minimum contribution', async() => {
        try {
            await campaign.contribute.sendTransaction({
                value: '1000', /// minimumContribution = 1000
          from: accounts[1]
            })
        } catch (err) {
            assert(err);
        }
    });

    it('allows a manager to make a payment request', async() => {
        await campaign.createRequest('Buy batteries', '100', accounts[2]);
        const request = await campaign.requests(0);
        assert.equal('Buy batteries', request.description);
    });

    it('processes requests', async()=>{
        campaign = await Campaign.new("1000", accounts[0]);
        await campaign.contribute.sendTransaction({
            from: accounts[1],
            value: 150000
        });
        await campaign.createRequest('A', '75000', accounts[2]);
        var request = await campaign.requests(0);
        await campaign.approveRequest(0, {
            from: accounts[1],
            gas: 3000000
        });
        let balanceBeforeFin = await web3.eth.getBalance(accounts[2]);
        await campaign.finalizeRequest(0);
        let balanceAfterFin = await web3.eth.getBalance(accounts[2]);
        assert(balanceAfterFin > balanceBeforeFin);
    })
});
