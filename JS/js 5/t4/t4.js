async function fetchData(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
}

async function testFetchData() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };

    const url = 'https://reqres.in/api/users';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'free_user_3Ifc3SBshel88zcCS3vzyn6wMe7',
      },
      body: JSON.stringify(user),
    };

    const userData = await fetchData(url, options);

    console.log(userData);
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

testFetchData();
