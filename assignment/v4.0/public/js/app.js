import { ajax } from './ajax.js';

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
  ajax.get('/todos', _todos => {
    todos = _todos;
    render();
  });
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const addTodo = content => {
  const payload = { id: generateId(), content: content, completed: false };
  ajax.post('/todos', payload, _todos => {
    todos = [payload, ...todos];
    render();
  });
};

const removeTodo = id => {
  ajax.delete(`/todos/${id}`, _todos => {
    todos = todos.filter(todo => todo.id !== +id);
    render();
  });
};

const selectTodo = id => {
  const { completed } = todos.filter(todo => todo.id === +id);
  ajax.patch(`/todos/${id}`, completed, _todos => {
    todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
    render();
  });
};

const toggleTodo = checked => {
  const completed = { completed : checked };
  ajax.patch('/todos', completed, _todos => {
    todos = todos.map(todo => ({ ...todo, completed: checked }));
    render();
  });
};

const removeCompletedTodo = () => {
  const todosId = todos.filter(todo => todo.completed);
  todosId.forEach(todo => { 
    ajax.delete(`/todos/${todo.id}`, _todos => { 
      todos = todos.filter(todo => !todo.completed);
      render();
    });
   });
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
};

$todos.onclick = e => {
  if (!e.target.matches('.remove-todo')) return;
  removeTodo(e.target.parentNode.id);
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
