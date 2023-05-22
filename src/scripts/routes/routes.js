import Restaurants from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/restaurant-list': Restaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
