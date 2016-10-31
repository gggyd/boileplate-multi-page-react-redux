import { RECEIVE_ACTIVITY } from '../constants';

const activity = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ACTIVITY:
      return action.activity;
    default:
      return state;
  }
};

export default activity;
