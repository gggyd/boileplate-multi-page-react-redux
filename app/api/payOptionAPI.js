import 'whatwg-fetch';

let PayOptionAPI = {
  fetchPayOption() {
    return fetch('/api/queryPayOption')
      .then(response => response.json());
  }
};

export default PayOptionAPI;