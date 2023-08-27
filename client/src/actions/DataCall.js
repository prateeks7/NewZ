import axios from 'axios';
// import { API_URL } from '../constants';
// import {_dispatch, _axios, getSessionItem} from '../utilities';



export async function getNews(address) {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://newz-5c4l.onrender.com/api/v1/newz',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({address:address}),
    });
    console.log(response.data);
    return response.data;
  }
  catch (err) {
    console.log(err);
  }
}



