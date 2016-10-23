import { REQUEST_AIRPORTS, RECEIVE_AIRPORTS } from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

let AirportActionCreators = {
  fetchAirports() {
    return (dispatch) => {
      dispatch({ type: REQUEST_AIRPORTS });
      AirCheapAPI.fetchAirports().then(
        (airports) => dispatch({ type: RECEIVE_AIRPORTS, success: true, airports}),
        (error) => dispatch({ type: RECEIVE_AIRPORTS, success: false })
      );
    };
  },

}

export default AirportActionCreators;