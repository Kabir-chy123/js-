// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
const ul = document.querySelector('ul');
const addButton = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('form input');

// show todo items
function showTodos() {
  ul.innerHTML = '';

  todoList.forEach(function (todo) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const label = document.createElement('label');
    label.textContent = todo.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    // checkbox change
    checkbox.addEventListener('change', function () {
      todo.completed = checkbox.checked;

      console.log(todoList);
    });

    // delete todo
    deleteButton.addEventListener('click', function () {
      const index = todoList.indexOf(todo);

      todoList.splice(index, 1);

      ul.removeChild(li);

      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

// open modal
addButton.addEventListener('click', function () {
  dialog.showModal();
});

// add new todo
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskName = input.value;

  if (taskName !== '') {
    const newTodo = {
      id: todoList.length + 1,
      task: taskName,
      completed: false,
    };

    todoList.push(newTodo);

    console.log(todoList);

    input.value = '';

    dialog.close();

    showTodos();
  }
});

showTodos();
