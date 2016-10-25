import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/BankActionCreators';
import Store from '../AppStore';
import { DEPOSIT_TO_ACCOUNT, WITHDRAW_FROM_ACCOUNT } from '../constants';

class Banks extends Component {

  deposit() {
    let amount = this.refs.amount.value;
    this.props.onDeposit(amount);
    this.refs.amount.value = '';
  }

  withdraw() {
    let amount = this.refs.amount.value;
    this.props.onWithdraw(amount);
    this.refs.amount.value = '';
  }

  render() {
    return(
      <div>
        <span>Your balance is ${(this.props.balance).toFixed(2)}.</span>
        <input type="text" ref="amount" />
        <button onClick={this.deposit.bind(this)}>Deposit</button>
        <button onClick={this.withdraw.bind(this)}>Withdraw</button>
      </div>
    );
  }
};

Banks.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    balance: state.banks.balance
  }
};

const mapDispatchToProps = (dispatch) => ({
  onDeposit: (amount) => dispatch(Actions.DepositToAccount(amount)),
  onWithdraw: (amount) => dispatch(Actions.WithdrawFromAccount(amount))
});

const BanksContainer = connect(mapStateToProps, mapDispatchToProps)(Banks);

export default BanksContainer;