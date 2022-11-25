//ToDo app selectors
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    console.log(todoText)