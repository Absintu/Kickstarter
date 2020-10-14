import web3 from './web3';
import CampaignFactory from '../build/contracts/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x2D9DffC2056D5e3a723474822468717f40aF30aE'
);
export default instance