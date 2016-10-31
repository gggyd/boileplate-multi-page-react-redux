import { REQUEST_ACTIVITY, RECEIVE_ACTIVITY } from '../constants';
import ActivityAPI from '../api/ActivityAPI';

let ActivityActionCreators = {
  fetchActivity() {
    return (dispatch) => {
      dispatch({ type: REQUEST_ACTIVITY });
      ActivityAPI.fetchActivity().then(
        (activity) => dispatch({ type: RECEIVE_ACTIVITY, success: true, activity }),
        (error) => dispatch({ type: RECEIVE_ACTIVITY, success: false})
      )
    } 
  }
}

export default ActivityActionCreators;
