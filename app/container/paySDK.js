import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PaySDKActionCreators from '../actions/PaySDKActionCreators';

class PayOption extends Component {
  componentDidMount() {
    this.props.fetchOption();
  }

  render() {
    let { paySDK } = this.props; 
    console.log(paySDK);
    let gameList = paySDK.PayOption && paySDK.PayOption.gameList ? paySDK.PayOption.gameList.map(game => (
        <div key={game.appCode} >
          <div>AppCode: {game.appCode}</div>
          <div>gameName: {game.gameName}</div>
          <div>unit: {game.unit}</div>
        </div>
      )
    ) : null
    return (
      <div>
        {gameList}
      </div>
    )
  }
}

PayOption.propTypes = {
  option: PropTypes.object
};

const mapStateToProps = (state) => ({
  paySDK: state.paySDK
});

const mapDispatchToProps = (dispatch) => ({
  fetchOption: () => dispatch(PaySDKActionCreators.fetchPayOption())
});

const PayOptionContaner = connect(mapStateToProps, mapDispatchToProps)(PayOption);

export default PayOptionContaner;