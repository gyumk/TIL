// State
let todos = [];

// Doms
const $input = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');
const $todos = document.querySelector('.todos');
const $toggleTodo = document.querySelector('#ck-complete-all');
const $clearButton = document.querySelector('.btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');


const getTodos = () => {
  // from DB
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 3, content: 'CSS', completed: false },
    { id: 2, content: 'JAVASCRIPT', completed: true }
  ];
  render();
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const selectTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
};

const toggleTodo = checked => {
  todos = todos.map(todo => ({ ...todo, completed: checked }));
};

const removeCompletedTodo = () => {
  todos = todos.filter(todo => !todo.completed);
  $toggleTodo.checked = '';
};

const countCompletedTodo = () => {
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
};

const countActiveTodo = () => {
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};


const render = () => {
  let html = '';
  let list = todos;
  const $active = document.querySelector('.active');
  list = list.filter(todo => ($active.id === 'all' ? todo : ($active.id === 'active' ? !todo.completed : todo.completed)));
  list.forEach(({ id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });
  countCompletedTodo();
  countActiveTodo();
  $todos.innerHTML = html;
};

window.onload = getTodos;


$input.onkeyup = e => {
  if (e.keyCode !== 13 || e.target.value === '') return;
  addTodo(e.target.value);
  e.target.value = '';
  render();
};

$todos.onclick = e => {
  if (!e.target.matches('.remove-todo')) return;
  removeTodo(e.target.parentNode.id);
  render();
};

$todos.onchange = e => {
  selectTodo(e.target.parentNode.id);
  render();
};

$toggleTodo.onchange = ({ target }) => {
  toggleTodo(target.checked);
  render();
};

$clearButton.onclick = () => {
  removeCompletedTodo();
  render();
};


$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li')) return;
  [...$nav.children].forEach(item => item.classList.toggle('active', item === target));
  render();
};
