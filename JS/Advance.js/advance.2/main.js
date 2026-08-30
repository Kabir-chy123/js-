import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const table = document.querySelector('#restaurantTable');
const modal = document.querySelector('#restaurantModal');

const showRestaurants = (restaurants) => {
  table.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      try {
        const menu = await fetchData(
          baseUrl + '/restaurants/daily/' + restaurant._id + '/fi'
        );

        modal.innerHTML = restaurantModal(restaurant, menu);
        modal.showModal();
      } catch (error) {
        alert('Could not load menu');
      }
    });

    table.appendChild(row);
  });
};

const getRestaurants = async () => {
  try {
    const restaurants = await fetchData(baseUrl + '/restaurants');

    showRestaurants(restaurants);

    const sodexoButton = document.querySelector('#sodexo');
    const compassButton = document.querySelector('#compass');
    const allButton = document.querySelector('#all');

    sodexoButton.addEventListener('click', () => {
      const sodexoRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Sodexo'
      );

      showRestaurants(sodexoRestaurants);
    });

    compassButton.addEventListener('click', () => {
      const compassRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Compass Group'
      );

      showRestaurants(compassRestaurants);
    });

    allButton.addEventListener('click', () => {
      showRestaurants(restaurants);
    });
  } catch (error) {
    table.innerHTML = '<p>Could not load restaurants</p>';
  }
};

getRestaurants();
