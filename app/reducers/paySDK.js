import { REQUEST_QUERY_PAY_OPTION, RECEIVE_QUERY_PAY_OPTION } from '../constants';
import { combineReducers } from 'redux';

const initialState = {
  info: {
    buyerId: '',
    zoneId: '',
    price: 0,
    pay: 'qbao',
    payDesc: '钱宝支付',
    appCode: '',
    channelCode: 'CHA000001',
    chargePointName: '充值',
    payOrigin: 'pc',
    areaId: 0,
    service: 'create_direct_pay_by_user',
    orderNo: '',
    transDate: '',
  },
  payOption: {}
}

let PayOption = (state = initialState.payOption, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_PAY_OPTION:
      return action.option.data;
    default:
      return state;
  }
};

let Info = (state = initialState.info, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

const paySDK = combineReducers({
  PayOption,
  Info
});

export default paySDK;

