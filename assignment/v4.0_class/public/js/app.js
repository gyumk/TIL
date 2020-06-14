// import { ajax } from './xhr.js';
// import { request } from './xhr.js';

// State
let todos = [];
let navState = 'all';

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

  // axios
  axios.get('/todos')
    .then(response => todos = response.data)
    .then(render)
    .catch(err => console.error(err))

  // fetch
  // request.get('/todos')
  // .then(response => response.json())
  // .then(json => todos = json)
  // .then(render)
  // .catch(err => console.error(err));

  // promise
  // ajax.get('/todos')
  // .then(_todos => todos = _todos)
  // .then(render)
  // .catch(err => console.error(err));

  // ajax
  // ajax.get('/todos', _todos => {
  //   todos = _todos;
  //   render();
  // });
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

const addTodo = content => {
 
  //axios
  axios.post('/todos', {
    id: generateId(),
    content: content,
    completed: false
  })
  .then(response => todos = response.data)
  .then(render)
  .catch(err => console.error(err));

  // fetch
  // request.post('./todos', { 
  //   id: generateId(),
  //   content: content,
  //   completed: false })
  //   .then(response => response.json())
  //   .then(json => todos = json)
  //   .then(render)
  //   .catch(err => console.error(err));
  

  // promise
  // ajax.post('/todos', { id: generateId(), content: content, completed: false })
  // .then(_todos => todos = _todos)
  // .then(render)
  // .catch(err => console.error(err));


  // ajax
  // const payload = { id: generateId(), content: content, completed: false };
  // ajax.post('/todos', payload, _todos => {
  //   todos = [payload, ...todos];
  //   render();
  // });
};

const removeTodo = id => {

  // axios
  axios.delete(`/todos/${id}`)
  .then(response => todos = response.data)
  .then(render)
  .catch(err => console.error(err));

  // fetch
  // request.delete(`/todos/${id}`)
  //   .then(response => response.json())
  //   .then(json => todos = json)
  //   .then(render)
  //   .catch(err => console.error(err));

  // promise
  // ajax.delete(`/todos/${id}`)
  //   .then(_todos => todos = _todos)
  //   .then(render)
  //   .catch(err => console.error(err));

  // ajax
  // ajax.delete(`/todos/${id}`, _todos => {
  //   todos = _todos;
  //   render();
  // });
};

const selectTodo = id => {
  const { completed } = todos.filter(todo => todo.id === +id);

  // axios
  axios.patch(`/todos/${id}`, completed)
  .then(response => todos = response.data)
  .then(render)
  .catch(err => console.error(err));

  // fetch
  // request.patch(`/todos/${id}`, completed)
  //   .then(response => response.json())
  //   .then(json => todos = json)
  //   .then(render)
  //   .catch(err => console.error(err));

  // promise
  // ajax.patch(`/todos/${id}`, completed)
  //   .then(_todos => todos = _todos)
  //   .then(render)
  //   .catch(err => console.error(err));

  // ajax
  // ajax.patch(`/todos/${id}`, completed, _todos => {
  //   todos = _todos;
  //   render();
  // });
};

const toggleTodo = checked => {

  // axios
  axios.patch(`/todos`, { completed : checked })
  .then(response => todos = response.data)
  .then(render)
  .catch(err => console.error(err));

  // fetch
  // request.patch('/todos', { completed })
  //   .then(response => response.json())
  //   .then(json => todos = json)
  //   .then(render)
  //   .catch(err => console.error(err));

  // promise
  // ajax.patch('/todos', { completed })
  // .then(_todos => todos = _todos)
  // .then(render)
  // .catch(err => console.error(err));

  // ajax
  // ajax.patch('/todos', completed, _todos => {
  //   todos = _todos;
  //   render();
  // });
};

const removeCompletedTodo = () => {

  // axios
  axios.delete(`/todos/completed`)
  .then(response => todos = response.data)
  .then(render)
  .catch(err => console.error(err));

  // fetch
  // request.delete(`/todos/completed`)
  //   .then(response => response.json())
  //   .then(json => todos = json)
  //   .then(render)
  //   .catch(err => console.error(err));

  // promise
  // ajax.delete(`/todos/completed`)
  //   .then(_todos => todos = _todos)
  //   .then(render)
  //   .catch(err => console.error(err));

  // ajax
    // ajax.delete(`/todos/completed`, _todos => { 
    //   todos = _todos;
    //   render();
    // });

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
  let _todos = todos.filter(({ completed }) => (navState === 'completed' ? completed : ( navState === 'active' ? !completed : true)));
  _todos.forEach(({ id, content, completed}) => {
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
};

$toggleTodo.onchange = ({ target }) => {
  toggleTodo(target.checked);
};

$clearButton.onclick = () => {
  removeCompletedTodo();
};


$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li')) return;
  [...$nav.children].forEach(item => item.classList.toggle('active', item === target));
  navState = target.id;
  render();
};
