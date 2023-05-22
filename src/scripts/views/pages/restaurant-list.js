import TheRestaurantsDbSource from '../../data/restaurants-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
      <h1 class="latest__label">Restaurant List</h1>
      <div class="posts" id="posts">
        
      
      </div>
    </div>
  </section>
        `;
  },

  async afterRender() {
    const List = await TheRestaurantsDbSource.ListRestaurants();
    const listContainer = document.querySelector('#posts');
    List.forEach((restaurant) => {
      listContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
