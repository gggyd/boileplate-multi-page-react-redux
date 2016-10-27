import 'whatwg-fetch';

let PayOptionAPI = {
  fetchPayOption() {
    return fetch('http://sdkserver.domestore.cn/bqpay/queryPayOption')
      .then(response => response.json());
  }
};

export default PayOptionAPI;