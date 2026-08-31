const restaurantURL =
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

const restaurantList = document.querySelector('#restaurant-list');
const modal = document.querySelector('#restaurant-modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('#close-modal');

// get restaurants
async function getRestaurants() {
  try {
    const response = await fetch(restaurantURL);

    if (!response.ok) {
      throw new Error('Could not get restaurants');
    }

    const restaurants = await response.json();

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    displayRestaurants(restaurants);
  } catch (error) {
    console.log(error);

    restaurantList.innerHTML =
      '<p>Could not load restaurants. Check VPN or school network.</p>';
  }
}

// show restaurants
function displayRestaurants(restaurants) {
  restaurantList.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const div = document.createElement('div');

    div.classList.add('restaurant');

    div.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>${restaurant.address}</p>
    `;

    div.addEventListener('click', () => {
      showRestaurant(restaurant, div);
    });

    restaurantList.appendChild(div);
  });
}

// restaurant clicked
async function showRestaurant(restaurant, element) {
  document.querySelectorAll('.restaurant').forEach((item) => {
    item.classList.remove('highlight');
  });

  element.classList.add('highlight');

  try {
    const menuURL = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`;

    const response = await fetch(menuURL);

    if (!response.ok) {
      throw new Error('Could not get menu');
    }

    const menu = await response.json();

    showModal(restaurant, menu);
  } catch (error) {
    console.log(error);

    showModal(restaurant, null);
  }
}

// show modal
function showModal(restaurant, menu) {
  let menuHTML = '<p>No menu available today.</p>';

  if (menu && menu.courses && menu.courses.length > 0) {
    menuHTML = '<ul>';

    menu.courses.forEach((course) => {
      menuHTML += `
        <li>
          <strong>${course.name}</strong><br>
          Price: ${course.price || '-'}<br>
          Diets: ${course.diets || '-'}
        </li>
      `;
    });

    menuHTML += '</ul>';
  }

  modalContent.innerHTML = `
    <h2>${restaurant.name}</h2>

    <h3>Restaurant Information</h3>

    <p>Address: ${restaurant.address || '-'}</p>
    <p>Postal code: ${restaurant.postalCode || '-'}</p>
    <p>City: ${restaurant.city || '-'}</p>
    <p>Phone: ${restaurant.phone || '-'}</p>
    <p>Company: ${restaurant.company || '-'}</p>

    <h3>Today's Menu</h3>

    ${menuHTML}
  `;

  modal.showModal();
}

// close modal
closeModal.addEventListener('click', () => {
  modal.close();
});

getRestaurants();
