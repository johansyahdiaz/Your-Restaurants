import UrlParser from '../../routes/url-parser';
import TheRestaurantsDbSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <h1 class="detail-page-title">Detail Restaurant</h1>
    <div class="detail" id="detail">
    </div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantsDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
