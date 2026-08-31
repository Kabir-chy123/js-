const requestURL = 'https://reqres.in/api/unknown/23';

async function getData() {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'free_user_3Ifc3SBshel88zcCS3vzyn6wMe7',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

getData();
