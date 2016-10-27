import { REQUEST_QUERY_PAY_OPTION, RECEIVE_QUERY_PAY_OPTION } from '../constants';

const option = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_PAY_OPTION:
      return action.option.data;
    default: 
      return state;
  }
};

export default option;