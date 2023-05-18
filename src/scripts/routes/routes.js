import Restaurants from '../views/pages/restaurant-list';

import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurants, // default page
  '/now-playing': Restaurants,
  '/detail/:id': Detail,
};

export default routes;
