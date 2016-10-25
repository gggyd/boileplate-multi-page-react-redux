import { DEPOSIT_TO_ACCOUNT, WITHDRAW_FROM_ACCOUNT } from '../constants';

let BankActionCreators = {
  DepositToAccount: function(amount) {
    return { type: DEPOSIT_TO_ACCOUNT, amount }
  },
  WithdrawFromAccount: function(amount) {
    return { type: WITHDRAW_FROM_ACCOUNT, amount}
  }
};

export default BankActionCreators;