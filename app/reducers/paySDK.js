import { 
  REQUEST_QUERY_PAY_OPTION, 
  RECEIVE_QUERY_PAY_OPTION,
  SELECTED_APP,
  SELECTED_AMOUNT,
  SHOW_SELECTED_APP,
  SELECTED_PAY
} from '../constants';
import { combineReducers } from 'redux';
import _ from 'lodash';

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
  toggle: {
    app: false,
    zone: false
  },
  payList: [
    {
      pay: 'qbao',
      payDesc: '钱宝支付'
    },
    {
      pay: 'alipay',
      payDesc: '支付宝'
    }
  ],
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
    case SELECTED_APP: 
    case SELECTED_AMOUNT:
    case SELECTED_PAY:
      return _.assign({}, state, action.info)
    default: 
      return state;
  }
}

let Toggle = (state = initialState.toggle, action) => {
  switch (action.type) {
    case SHOW_SELECTED_APP:
      return _.assign({}, state, {app: !state.app})
    default:
      return state;
  }
}

let PayList = (state = initialState.payList, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const paySDK = combineReducers({
  PayOption,
  Info,
  Toggle,
  PayList
});

export default paySDK;

