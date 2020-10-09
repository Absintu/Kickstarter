const Campaign = artifacts.require('Campaign');
const CampaignFactory = artifacts.require('CampaignFactory');
web3 = require('web3');
assert = require('assert');

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
        await campaign.createRequest('Buy batteries', '100', accounts[0]);
        const request = await campaign.requests(0);
        assert.equal('Buy batteries', request.description);
    });

    it('processes requests', async()=>{
        await campaign.contribute.sendTransaction({
            from: accounts[1],
            value: 150000
        });
        await campaign.createRequest('A', '75000', accounts[0]);
        await campaign.approveRequest.call.send({
            from: accounts[1],
            value: 5,
            gas: 1000000
        });
        console.log(await campaign.manager());
        console.log(accounts[0]);
        await campaign.finalizeRequest(0);
        let balance = await accounts[1].getBalance();
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 104);
    })
/*
    it('should have as manager the account which deployed', async () => {
        const manager = await instance.manager.call();
        assert.equal(manager, accounts[0]);
    });

    it('allows one account to enter', async ()=>{
        await instance.enter({
            from: accounts[0],
            value: web3.utils.toWei("0.02", "ether")
        });

        const players = await instance.getPlayers({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);
    });

    it('allows multiple accounts to enter', async ()=>{
        await instance.enter({
            from: accounts[1],
            value: web3.utils.toWei("0.02", "ether")
        });

        await instance.enter({
            from: accounts[2],
            value: web3.utils.toWei("0.02", "ether")
        });

        await instance.enter({
            from: accounts[3],
            value: web3.utils.toWei("0.02", "ether")
        });

        players = await instance.getPlayers({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(accounts[3], players[3]);
        assert.equal(4, players.length);
    });

    it("requires a minimum amount of ether to enter!", async ()=>{
        try{
            await instance.enter({
                from: account[0],
                value: 0
            });
            assert(false);
        } catch(err){
            assert(err);
        }
    });

    it("only manager can call pickWinner", async ()=>{
        try{
            await instance.pickWinner({
                from: accounts[1]
            });
            assert(false);
        } catch (err){
            assert(err);
        }
    });  */
});
