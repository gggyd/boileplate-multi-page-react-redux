import { REQUEST_QUERY_PAY_OPTION, RECEIVE_QUERY_PAY_OPTION } from '../constants';
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
  
};

export default PaySDKActionCreators;
