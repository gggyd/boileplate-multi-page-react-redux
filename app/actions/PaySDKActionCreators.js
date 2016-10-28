import { 
  REQUEST_QUERY_PAY_OPTION, 
  RECEIVE_QUERY_PAY_OPTION,
  SELECTED_APP,
  SELECTED_AMOUNT,
  SHOW_SELECTED_APP
 } from '../constants';
import PayOptionAPI from '../api/payOptionAPI';

let PaySDKActionCreators = {
  fetchPayOption() { 
    return (dispatch) => {
      dispatch({type: REQUEST_QUERY_PAY_OPTION});
      PayOptionAPI.fetchPayOption().then(
        (option) => dispatch({type: RECEIVE_QUERY_PAY_OPTION, success: true, option }),
        (error) => dispatch({ type: RECEIVE_QUERY_PAY_OPTION, success: false })
      )
    };
  },
  
  selectedApp(game) {
    return {type: SELECTED_APP, info: game}
  },

  selectedAmount(amount) {
    return {type: SELECTED_AMOUNT, info: {amount}}
  },

  showSelectedApp() {
    return {type: SHOW_SELECTED_APP}
  }
};

export default PaySDKActionCreators;
