import axios from 'axios';



export function getNews(address) {
  return axios({
      method: 'GET',
      url: address,
  });
}
