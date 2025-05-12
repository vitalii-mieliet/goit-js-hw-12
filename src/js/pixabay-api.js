import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common.key = '50190409-57f653f3b13017a76580224dc';
const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  return axios('', {
    params: {
      q: query,
      key: '50190409-57f653f3b13017a76580224dc',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(res => res.data)
    .catch(error => error);
}
