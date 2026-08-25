import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import images from './images-data';

const galleryElem = document.querySelector('.gallery');

galleryElem.insertAdjacentHTML('beforeend', getGalleryMarkup(images));

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

gallery.on('show.simplelightbox');

function getGalleryMarkup(arr) {
  return arr
    .map(
      item => `
    <li class="gallery-item">
      <a class="gallery-link" href="${item.original}">
        <img 
          class="gallery-image" 
          src="${item.preview}" 
          alt="${item.description}" 
        />
      </a>
    </li>
    `
    )
    .join('');
}
