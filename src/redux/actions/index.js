import { getWeb3 } from '../../utils';


// WEB3 CONNECT
export const WEB3_CONNECT = 'WEB3_CONNECT';
export const web3Connect = () => async (dispatch) => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    if(web3.currentProvider?.connection?.networkVersion !== '3') {
        alert('Unkown network, please change network to Ropsten network');
        return;
    }
    if(accounts.length > 0) {
        const account = accounts[0];
        let balance = await web3.eth.getBalance(account);
        dispatch({
            type: WEB3_CONNECT,
            web3, 
            account
        }) 
    } else {
        console.log('Account not found');
    }
}

// INIT CONSTRACT
export const INIT_CONTRACT = 'INIT_CONTRACT';
export const instantiateContracts = () => async (dispatch, getState) => {
    const state = getState();
    let web3 = state.web3;
    const networkId = process.env.REACT_APP_NETWORK_ID;
    const metaCoinAddress = '0x41ds4das5d4as6das52sa432s';
    let metaCoin = new web3.eth.Contract('abi', metaCoinAddress, {
        transactionConfirmationBlocks: 1
    })
    dispatch({
        type: INIT_CONTRACT,
        metaCoin
    })
}

// SEND COIN
export const SEND_COIN = 'SEND_COIN';
export const sendCoin = (receiver, amount) => (dispatch, getState) => {
  const state = getState();
  const metacoin = state.metacoin;
  const account = state.account;
  metacoin.methods
    .sendCoin(receiver, amount)
    .send({ account })
    .then(() => {
      console.log('success');
      dispatch({
        type: SEND_COIN,
        amount
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

// GET BALANCE
export const GET_BALANCE = 'GET_BALANCE';
export const getBalance = () => async (dispatch, getState) => {
  const state = getState();
  const metaCoin = state.metaCoin;
  const account = state.account;
  let balance = await metaCoin.methods.getBalance(account).call({ from: account });
  dispatch({
    type: GET_BALANCE,
    balance
  });
};