// Selectors
const spidermanTheme = document.querySelector('.spiderman');
const frozenTheme = document.querySelector('.frozen');
const pirateTheme = document.querySelector('.pirate');
const outerspaceTheme = document.querySelector('.outerspace');
const dinasaurTheme = document.querySelector('.dinasaur');
const unicornTheme = document.querySelector('.unicorn');
const toDoBtn = document.querySelector('.todo-btn');
const toDoInput = document.querySelector('todo-input');
const toDoList = document.querySelector('todo-list');

// Event Listeners
spidermanTheme.addEventListener('click', () => changeTheme1('spiderman'));
frozenTheme.addEventListener('click', () => changeTheme2('frozen'));
pirateTheme.addEventListener('click', () => changeTheme3('pirate'));
outerspaceTheme.addEventListener('click', () => changeTheme4('outerspace'));
dinasaurTheme.addEventListener('click', () => changeTheme5('dinasaur'));
unicornTheme.addEventListener('click', () => changeTheme6('unicorn'));
toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletecheck);
document.addEventListener("DOMContentLoaded", getTodos);


// Function to change theme
function changeTheme1() {
  document.body.style.backgroundImage = "url('./static/images/spiderman.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme2() {
  document.body.style.backgroundImage = "url('./static/images/frozen-2.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme3() {
  document.body.style.backgroundImage = "url('./static/images/Pirate-Picture.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme4() {
  document.body.style.backgroundImage = "url('./static/images/space.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme5() {
  document.body.style.backgroundImage = "url('./static/images/dinasaur.png')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme6() {
  document.body.style.backgroundImage = "url('./static/images/unicorn.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}
  
//Functions
function addToDo(event) {
  event.preventDefault();

}





