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
        'x-api-key': 'free_user_3Ifc3SBshel88zcCS3vzyn6wMe7',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log('Something went wrong');
  }
}

createUser();
