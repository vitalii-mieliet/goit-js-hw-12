import axios from 'axios';

export class PixabayApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '50190409-57f653f3b13017a76580224dc';
  #query = '';
  #page = 1;
  #per_page = 15;
  #total_pages = 1;

  async getImagesByQuery() {
    try {
      const res = await axios.get(this.#BASE_URL, {
        params: {
          q: this.#query,
          key: this.#API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: this.#per_page,
          page: this.#page,
        },
      });
      this.calculateTotalPages(res.data.totalHits);

      return res.data;
    } catch (error) {
      return error;
    }
  }

  calculateTotalPages(totalHits) {
    this.totalPages = Math.max(1, Math.ceil(totalHits / this.#per_page));
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

  get query() {
    return this.#query;
  }

  get page() {
    return this.#page;
  }

  get per_page() {
    return this.#per_page;
  }
  get totalPages() {
    return this.#total_pages;
  }

  nextPage() {
    return (this.#page += 1);
  }

  resetPage() {
    this.#page = 1;
  }
}
