const requestURL = 'https://reqres.in/api/users';

async function createUser() {
  const user = {
    name: 'Kabir',
    job: 'Student',
  };

  try {
    const response = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser();
