import { DEPOSIT_TO_ACCOUNT, WITHDRAW_FROM_ACCOUNT } from '../constants';

const initialState = {
  balance: 0
}

let banks = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_TO_ACCOUNT:
      return {balance: state.balance + parseFloat(action.amount)};
    case WITHDRAW_FROM_ACCOUNT:
      return {balance: state.balance - parseFloat(action.amount)};
    default: 
      return state;
  }
};

export default banks;