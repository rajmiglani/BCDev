import web3 from './web3';
import NGOs from './build/NGOs.json';
//create a local copy of the SC deployed on the ETH BC in the browser
// run deploy.js to get these
const address = '0x4D22FDf663A0b8A5B66c4B111591FAcA5b82a517';

const meraNGO = new web3.eth.Contract(JSON.parse(NGOs.interface),address);
export default meraNGO;
