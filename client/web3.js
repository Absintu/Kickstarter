import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3= new Web3(window.web3.currentProvider);
    console.log('We are in the browser and metamask is running.');
} else if (typeof window !== 'undefined'){
    try {
        window.ethereum.enable().then(function() {
            // User has allowed account access to DApp...
        });
     } catch(e) {
        // User has denied account access to DApp...
        alert('Cant use window.ethereum !');
     }
}
else{
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        `https://goerli.infura.io/v3/e692e48e183f4772a500fe1ab8d47f03`
    );
    web3 = new Web3(provider);
    console.log('We are on the server *OR* the user is not running metamask');
}

export default web3;
