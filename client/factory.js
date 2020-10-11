import web3 from './web3';
import CampaignFactory from '../build/contracts/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x41421Bd8778450d09F14c97765A067e62c780D44'
);
export default instance