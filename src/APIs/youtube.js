import axios from 'axios';

const KEY = 'AIzaSyDCKM1La2qbNQTczHLUXPNzB5TI7DXttDA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY,
  },
});
