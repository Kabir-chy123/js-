let number = Number(prompt('Enter a positive integer:'));

let table = "<table border='1'>";

for (let i = 1; i <= number; i++) {
  table += '<tr>';

  for (let j = 1; j <= number; j++) {
    table += '<td>' + i * j + '</td>';
  }

  table += '</tr>';
}

table += '</table>';

document.getElementById('result').innerHTML = table;
