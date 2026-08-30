const restaurantRow = (restaurant) => {
  const {name, company} = restaurant;

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;

  return row;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;

  let menuHtml = '<ul>';

  courses.forEach((course) => {
    menuHtml += `<li>${course.name} - ${course.price ? course.price : '?€'}</li>`;
  });

  menuHtml += '</ul>';

  return `
    <h2>${name}</h2>
    <p>${address}</p>
    <p>${postalCode} ${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    ${menuHtml}
  `;
};

export {restaurantRow, restaurantModal};
