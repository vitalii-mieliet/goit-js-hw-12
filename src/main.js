import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { PixabayApi } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showElement,
  hideElement,
  simpleLightbox,
} from './js/render-functions';

const api = new PixabayApi();

const formEl = document.querySelector('.js-form');
const loader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('#load-more-button');

formEl.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);

async function handleFormSubmit(event) {
  event.preventDefault();

  api.resetPage();

  api.query = event.target.elements['search-text'].value.trim();

  if (!api.query) {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter the correct query!',
    });
    return;
  }

  clearGallery();
  showElement(loader);

  try {
    const data = await api.getImagesByQuery();
    //? const data = await getImagesByQuery(query, page);

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
    const newCards = document.querySelectorAll('.gallery-item:not(.show)');
    addAnimationToCards(newCards);

    checkBtnStatus();
    simpleLightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `ERROR: ${error}`,
    });
  } finally {
    hideElement(loader);
    formEl.reset();
  }
}

// ======================

async function handleLoadMoreBtnClick() {
  showElement(loader);

  try {
    api.nextPage();

    const data = await api.getImagesByQuery();
    if (api.page >= api.totalPages) {
      checkBtnStatus();
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    createGallery(data.hits);
    const newCards = document.querySelectorAll('.gallery-item:not(.show)');
    addAnimationToCards(newCards);

    scrollToNewItems();
    checkBtnStatus();
    simpleLightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `ERROR: ${error}`,
    });
  } finally {
    hideElement(loader);
  }
}

function checkBtnStatus() {
  if (api.page < api.totalPages) {
    showElement(loadMoreBtn);
  } else {
    hideElement(loadMoreBtn);
  }
}

function scrollToNewItems() {
  const galleryItem = document.querySelector('.js-gallery-item');
  if (galleryItem) {
    const elementHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: elementHeight * 3 + 22,
      behavior: 'smooth',
    });
  }
}

// ======================

function addAnimationToCards(newCards) {
  newCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 100);
  });
}
