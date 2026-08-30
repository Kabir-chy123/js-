let movies = [];

let amount = Number(prompt('How many movies?'));

for (let i = 0; i < amount; i++) {
  let title = prompt('Enter movie name');
  let rating = Number(prompt('Enter rating 1-5'));

  let movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

let result = '';

for (let movie of movies) {
  result += movie.title + ' - ' + movie.rating + '<br>';
}

result += '<br>Highest rated movie: ' + movies[0].title;

document.getElementById('result').innerHTML = result;
