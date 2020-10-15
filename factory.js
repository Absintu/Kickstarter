import web3 from './web3';
import CampaignFactory from './ethereum/build/contracts/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x03aFed297832a657eB1cfB727956b707a12969f9'
);
export default instance