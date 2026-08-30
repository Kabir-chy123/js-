const restaurantURL =
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

const restaurantList = document.querySelector('#restaurant-list');
const modal = document.querySelector('#restaurant-modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('#close-modal');

// Get all restaurants from API
async function getRestaurants() {
  try {
    const response = await fetch(restaurantURL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const restaurants = await response.json();

    // Sort restaurants alphabetically
    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    displayRestaurants(restaurants);
  } catch (error) {
    console.error('Error loading restaurants:', error);

    restaurantList.innerHTML =
      '<p>Could not load restaurants. Make sure you are connected to Metropolia network or VPN.</p>';
  }
}

// Display restaurants
function displayRestaurants(restaurants) {
  restaurantList.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const restaurantDiv = document.createElement('div');

    restaurantDiv.classList.add('restaurant');

    restaurantDiv.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>${restaurant.address}</p>
    `;

    restaurantDiv.addEventListener('click', () => {
      selectRestaurant(restaurant, restaurantDiv);
    });

    restaurantList.appendChild(restaurantDiv);
  });
}

// Restaurant clicked
async function selectRestaurant(restaurant, element) {
  // Remove previous highlight
  document.querySelectorAll('.restaurant').forEach((item) => {
    item.classList.remove('highlight');
  });

  // Highlight selected restaurant
  element.classList.add('highlight');

  try {
    // Fetch today's menu
    const menuURL = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`;

    const response = await fetch(menuURL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const menu = await response.json();

    displayModal(restaurant, menu);
  } catch (error) {
    console.error('Error loading menu:', error);

    displayModal(restaurant, null);
  }
}

// Display restaurant information + menu
function displayModal(restaurant, menu) {
  let menuHTML = '<p>No menu available today.</p>';

  if (menu && menu.courses && menu.courses.length > 0) {
    menuHTML = '<ul>';

    menu.courses.forEach((course) => {
      menuHTML += `
        <li>
          <strong>${course.name}</strong>
          ${course.price ? `<br>Price: ${course.price}` : ''}
          ${course.diets ? `<br>Diets: ${course.diets}` : ''}
        </li>
      `;
    });

    menuHTML += '</ul>';
  }

  modalContent.innerHTML = `
    <h2>${restaurant.name}</h2>

    <h3>Restaurant Information</h3>

    <p><strong>Address:</strong> ${restaurant.address || '-'}</p>
    <p><strong>Postal code:</strong> ${restaurant.postalCode || '-'}</p>
    <p><strong>City:</strong> ${restaurant.city || '-'}</p>
    <p><strong>Phone:</strong> ${restaurant.phone || '-'}</p>
    <p><strong>Company:</strong> ${restaurant.company || '-'}</p>

    <h3>Today's Menu</h3>

    ${menuHTML}
  `;

  modal.showModal();
}

// Close modal
closeModal.addEventListener('click', () => {
  modal.close();
});

// Start application
getRestaurants();
