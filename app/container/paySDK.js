import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PaySDKActionCreators from '../actions/PaySDKActionCreators';
import _ from 'lodash';

class PayOption extends Component {
  componentDidMount() {
    this.props.fetchOption();
  }

  componentWillUpdate(nextProps, nextState) {
    if (!(nextProps.paySDK.PayOption === this.props.paySDK.PayOption)) {
      let game = nextProps.paySDK.PayOption.gameList[0];
      this.props.onSelectedApp(game);

      let amount = nextProps.paySDK.PayOption.amountList[0];
      this.props.onSelectedAmount(amount);
    }

    if (!(nextProps.paySDK.Info.appCode === this.props.paySDK.Info.appCode)) {
      if (this.props.paySDK.Toggle.app) {
        this.props.onToggleApp();
      }
    }

    if (nextProps.paySDK.Toggle.app) {
      this.dropdownShow($(this.refs.selectedApp), $(this.refs.apps));
    } else {
      this.dropdownHide();
    }
  }

  dropdownOutsideClick(e) {
    var target = $(e.target);
    if (
      e.type == "focusin" ||
      target.closest('.dropdown').length
    ) return;

    this.props.onToggleApp();
  }

  dropdownShow(me, target) {
    let offset = $(me).offset();
    
    $(target).css('position', 'absolute').css('left', offset.left).css('top', offset.top + 55);

    let _outsideClickProxy = $.proxy(function(e) { this.dropdownOutsideClick(e); }, this);

    $(document)
      .on('mousedown.dropdown', _outsideClickProxy)
      .on('touchend.dropdown', _outsideClickProxy)
      .on('click.dropdown', '[data-toggle=dropdown]', _outsideClickProxy)
      .on('focusin.dropdown', _outsideClickProxy);
  }

  dropdownHide() {
    $(document).off('.dropdown');
  }

  render() {
    let { 
      paySDK, 
      onSelectedApp, 
      onSelectedAmount,
      onToggleApp 
    } = this.props; 

    let amountListData = paySDK.PayOption && paySDK.PayOption.amountList ? paySDK.PayOption.amountList : [];
    let gameListData = paySDK.PayOption && paySDK.PayOption.gameList ? paySDK.PayOption.gameList : [];

    let amountList = amountListData.map((amount, index) => (
      <span key={ 'amount_' + index } onClick={onSelectedAmount.bind(this, amount)}>
        {amount}
        {
          amount === paySDK.Info.amount && <em>*</em>
        }
        {' '}
      </span>
    ));

    return (
      <div>
        <div ref="selectedApp" onClick={onToggleApp.bind(this)}>
          游戏: {paySDK.Info.gameName} <br />
          Code: {paySDK.Info.appCode}
        </div>
        <br />
        <div ref="apps" className="dropdown">
        {
          paySDK.Toggle.app && gameListData.map(game => (
              <div key={game.appCode} onClick={onSelectedApp.bind(this, game)}>
                <div>AppCode: {game.appCode}</div>
                <div>gameName: {game.gameName}</div>
                <div>unit: {game.unit}</div>
                {
                  game.appCode === paySDK.Info.appCode && 
                  <div>selected!</div>
                }
                <br />
              </div>
            )
          )
        }
        </div>
        <div>
          {amountList}
        </div>
      </div>
    )
  }
}

PayOption.propTypes = {
  paySDK: PropTypes.object,
  fetchOption: PropTypes.func,
  onSelectedApp: PropTypes.func,
  onSelectedAmount: PropTypes.func,
  onToggleApp: PropTypes.func
};

const mapStateToProps = (state) => ({
  paySDK: state.paySDK
});

const mapDispatchToProps = (dispatch) => ({
  fetchOption: () => dispatch(PaySDKActionCreators.fetchPayOption()),
  onSelectedApp: (game) => dispatch(PaySDKActionCreators.selectedApp(game)),
  onSelectedAmount: (amount) => dispatch(PaySDKActionCreators.selectedAmount(amount)),
  onToggleApp: () => dispatch(PaySDKActionCreators.showSelectedApp())
});

const PayOptionContaner = connect(mapStateToProps, mapDispatchToProps)(PayOption);

export default PayOptionContaner;