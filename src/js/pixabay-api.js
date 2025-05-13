import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// !===============================================
export class PixabayApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '50190409-57f653f3b13017a76580224dc';
  #query = '';
  #page = 1;
  #per_page = 15;
  #total_pages = 1;

  async getImagesByQuery(query, page) {
    try {
      const res = await axios('', {
        params: {
          q: this.#query,
          key: this.#API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: this.#per_page,
          page,
        },
      });

      return res.data;
    } catch (error) {
      return error;
    }
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  set totalPages(newTotalPages) {
    this.#total_pages = newTotalPages;
  }
}
// !===============================================

export async function getImagesByQuery(query, page) {
  try {
    const res = await axios('', {
      params: {
        q: query,
        key: '50190409-57f653f3b13017a76580224dc',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });

    return res.data;
  } catch (error) {
    return error;
  }
}
