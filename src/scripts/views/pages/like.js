import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h1 class="detail-page-title">Favorite Restaurant</h1>
    <div class="posts" id="like">
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#like');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default Like;
