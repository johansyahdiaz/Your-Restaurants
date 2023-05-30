import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="title-detail">${restaurant.name}</h2>
  <img class="restaurant__img lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Deskripsi Restaurants</h4>
    <p>${restaurant.description}</p>
    <h4>Alamat</h4>
    <p>${restaurant.city}, ${restaurant.address}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories[0].name}</p>
    <h4>Menu</h4>
    <h5>Makanan</h5>
    <ul>
    <li>${restaurant.menus.foods[0].name}</li>
    <li>${restaurant.menus.foods[1].name}</li>
    <li>${restaurant.menus.foods[2].name}</li>
    </ul>
    <h5>Minuman</h5>
    <ul>
    <li>${restaurant.menus.drinks[0].name}</li>
    <li>${restaurant.menus.drinks[1].name}</li>
    <li>${restaurant.menus.drinks[2].name}</li>
    </ul>
    <h4>Review</h4>
    <p>Nama: ${restaurant.customerReviews[0].name}</p>
    <p>Review: ${restaurant.customerReviews[0].review}</p>
    <p>Date: ${restaurant.customerReviews[0].date}</p>
  </div>
`;

const createRestaurantsItemTemplate = (restaurant) => `
<article class="post-item">
<img class="post-item__thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"></img>
<div class="post-item__content">
  <p class="post-item__date"> Restaurant Rated  <span href="#" class="post-item__date__author">${restaurant.rating}</span>
  </p>
  <h1 class="post-item__title"><a href="/#/detail/${restaurant.id}" id=link-title>${restaurant.name}</a></h1>
  <p class="post-item__description">${restaurant.description}</p>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
