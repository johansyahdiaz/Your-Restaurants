import UrlParser from '../../routes/url-parser';
import TheRestaurantsDbSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h1 class="detail-page-title">Detail Restaurant</h1>
    <div class="detail" id="detail">
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantsDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
