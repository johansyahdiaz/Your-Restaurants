import TheRestaurantsDbSource from '../../data/restaurants-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <section class="content">
    <article class="headline">
      <figure class="headline__figure">
        <img src="" alt="Warung Sunda">
        <figcaption>Warung Sunda</figcaption>
      </figure>
      <div class="headline__content">
        <h1 class="headline__title">Lezatnya Masakan Sunda di Warung Sunda: Nikmati masakan sunda yang Menggugah Selera</h1>
        <p class="headline__description">Warung Sunda adalah restoran yang menyajikan makanan khas Sunda dengan cita rasa autentik yang khas. 
          Restoran ini terletak di pusat kota dengan suasana yang nyaman dan hangat. Warung Sunda menyediakan menu-menu lezat seperti nasi timbel,
           pepes ikan, sayur asem, sate maranggi, dan masih banyak lagi.</p>
        <button class="headline__button">Read More</button>
      </div>
    </article>
    <div class="latest">
      <h1 class="latest__label">Menu</h1>
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
