import web3 from './web3';
import CampaignFactory from '../build/contracts/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x0dc949832FCDA191009dB75A542fEE45a0127b94'
);
export default instance