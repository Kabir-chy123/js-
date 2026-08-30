import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const table = document.querySelector('#restaurantTable');
const modal = document.querySelector('#restaurantModal');

const getRestaurants = async () => {
  const restaurants = await fetchData(baseUrl + '/restaurants');

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      const menu = await fetchData(
        baseUrl + '/restaurants/daily/' + restaurant._id + '/fi'
      );

      modal.innerHTML = restaurantModal(restaurant, menu);
      modal.showModal();
    });

    table.appendChild(row);
  });
};

getRestaurants();
