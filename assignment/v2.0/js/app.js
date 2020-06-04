const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $allSelect = document.getElementById('ck-complete-all');
const $removeButton = document.querySelector('.clear-completed > .btn');
const $completedCount = document.querySelector('.completed-todos');
const $activeTodoCount = document.querySelector('.active-todos');

// State
let todos = [];


// Todo-Completed-Count
const completedCount = () => {
  $completedCount.textContent = todos.filter(todo => todo.completed).length;
};

// Todo-Active-Count
const activeCount = () => {
  $activeTodoCount.textContent = todos.filter(todo => !todo.completed).length;
};

// Todo-Render
const render = () => {
  let html = '';
  todos.forEach(todo => { html += `<li id="${todo.id}" class="todo-item">
  <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
  <label for="ck-${todo.id}">${todo.content}</label>
  <i class="remove-todo far fa-times-circle"></i>
  </li>`; });
  $todos.innerHTML = html;

  // Todo-Completed-Count Event
  completedCount();

  // Todo-Active-Count Event
  activeCount();
};


// Generate Id
const generateId = () => {
  return todos.length ? (Math.max(...todos.map(({ id }) => id)) + 1) : 1;
};

// Add Todo
const addTodo = content => {
  todos = [{ id : generateId(), content, completed: false }, ...todos];
  render();
};

// Remove Todo
const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

// Select-Todo
const check = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  render();
};

// Select-All-Todos
const allCheck = () => {
  todos = todos.map(todo => ($allSelect.checked ? { ...todo, completed: true } : { ...todo, completed: false }));
  render();
};

// Remove-All-Completed Todos
const removeCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
  render();
};


// OnLoad
window.onload = function () {
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: false }
  ];

  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);
  render();
};


// Input-Enter Event
$input.onkeyup = e => {
  if (e.keyCode !== 13 || $input.value === '') return;
  $input.value = $input.value.trim();
  addTodo($input.value);
  $input.value = '';
};

// Remove-Button Event
$todos.onclick = e => {
  if (!e.target.matches('.todos > li > i')) return;
  const { id } = e.target.parentNode;
  removeTodo(id);
};


// Select-Todo Event
$todos.onchange = e => {
  const { id } = e.target.parentNode;
  check(id);
};

// Select-All-Todos Event
$allSelect.onchange = () => allCheck();

// Remove-All-Completed-Todos Event
$removeButton.onclick = () => removeCompleted();
