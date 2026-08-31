const requestURL = 'https://reqres.in/api/users/1';

async function getUser() {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'free_user_3Ifc3SBshel88zcCS3vzyn6wMe7',
      },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log('Something went wrong');
  }
}

getUser();
