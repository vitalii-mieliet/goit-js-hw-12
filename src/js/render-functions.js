import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightbox = new SimpleLightbox('.js-gallery .image-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
const galleryEl = document.querySelector('.js-gallery');

function createGallery(images) {
  const gallery = images
    .map(
      ({
        tags,
        largeImageURL,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
                <div>
                  <a href="${largeImageURL}" class="image-link">
                    <img
                      src="${webformatURL}"
                      alt="${tags}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${likes}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${views}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="info-value" data-comments>${comments}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${downloads}</p>
                    </li>
                  </ul>
                </div>
              </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', gallery);
}

function clearGallery() {
  galleryEl.innerHTML = '';
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

export {
  createGallery,
  clearGallery,
  showElement,
  hideElement,
  simpleLightbox,
};
