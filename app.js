const clock = document.getElementById('clock');
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

function createTodoItem(text) {
  const item = document.createElement('li');
  item.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('span');
  label.textContent = text;

  checkbox.addEventListener('change', () => {
    item.classList.toggle('done', checkbox.checked);
  });

  item.append(checkbox, label);
  return item;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    return;
  }

  list.appendChild(createTodoItem(text));
  input.value = '';
  input.focus();
});

updateClock();
setInterval(updateClock, 1000);
