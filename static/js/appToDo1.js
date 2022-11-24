document.querySelector('Form').addEventListener('submit', handleSubmitForm);

//Event handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
      addTodo(input.value);
    input.value = '';
  }

  function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    
    li.innerHTML = `
      <span class="todo-item">${todo}</span>
      <button name="checkButton">"fas fa-plus"</button>
      <button name="deleteButton">"fas fa-plus"<i class></button>
    `;
    
    li.classList.add('todo-list-item');
    ul.appendChild(li);
  }