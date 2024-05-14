import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ec31a307e3mshda32096535b1990p167d24jsnc4f1d0473853',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'Accept-Encoding': 'gzip, deflate, br'
  },
};

export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};