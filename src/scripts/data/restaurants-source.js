import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantsDbSource {
  static async ListRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const result = await response.json();
    return result.restaurant;
  }
}

export default TheRestaurantsDbSource;
