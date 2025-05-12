import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  simpleLightbox,
} from './js/render-functions';

const formEl = document.querySelector('.js-form');
const loader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('#load-more-button');

let query = '';
let page = 1;

formEl.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLodMoreBtnClick);

async function handleFormSubmit(event) {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter the correct query!',
    });
    return;
  }
  clearGallery();
  showLoader(loader);

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.warning({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      clearGallery();
      return;
    }

    createGallery(data.hits);
    addAnimationToCards(); // animation
    simpleLightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `ERROR: ${error}`,
    });
  } finally {
    hideLoader(loader);
    formEl.reset();
  }
}

// ======================

async function handleLodMoreBtnClick() {
  showLoader(loader);

  try {
    page += 1;
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    addAnimationToCards(); // animation
    simpleLightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `ERROR: ${error}`,
    });
  } finally {
    hideLoader(loader);
    formEl.reset();
  }
}

// ======================

function addAnimationToCards() {
  const cards = document.querySelectorAll('.gallery-item');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 100); // Задержка между появлением карточек
  });
}
