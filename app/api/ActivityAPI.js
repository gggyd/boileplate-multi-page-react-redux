import 'whatwg-fetch';

let ActivityAPI = {
  fetchActivity() {
    return fetch('/api/activity').then(reponse => reponse.json());
  }
}

export default ActivityAPI;