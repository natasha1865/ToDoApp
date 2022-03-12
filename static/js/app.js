// Selectors
const spidermanTheme = document.querySelector('.spiderman');
const frozenTheme = document.querySelector('.frozen');
const pirateTheme = document.querySelector('.pirate');
const outerspaceTheme = document.querySelector('.outerspace');
const dinasaurTheme = document.querySelector('.dinasaur');
const unicornTheme = document.querySelector('.unicorn');

// Event Listeners
spidermanTheme.addEventListener('click', () => changeTheme1('spiderman'));
frozenTheme.addEventListener('click', () => changeTheme2('frozen'));
pirateTheme.addEventListener('click', () => changeTheme3('pirate'));
outerspaceTheme.addEventListener('click', () => changeTheme4('outerspace'));
dinasaurTheme.addEventListener('click', () => changeTheme5('dinasaur'));
unicornTheme.addEventListener('click', () => changeTheme6('unicorn'));

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

window.onload = function() {
//variables
var form = document.getElementById("form");
var input = document.getElementById("input");
var btn = document.getElementById("btn");
var list = document.getElementById("list");
var id = 1;

//btn event listner
btn.addEventListener('click', addTodoItem);

//list event listner
list.addEventListener('click', boxChecked);

//Add to do item to list
  function addTodoItem() {
    if (input.value === "") {
      alert("you must enter some value");
    }
    else {
      if (list.style.borderTop === "") {
        list.style.borderTop = "2px solid white";
      }
      var test = input.value;
      var item = `<li id="li-${id}">${text}
                <input id ="box-${id}"
                    class="checkboxes" type="checkbox"></li>`;
      list.insertAdjacentHTML('beforeend', item);
      id++;
      form.reset();
    }

  }

  //adding strike trough style to list item
  function boxChecked(event) {
    const element = event.target;
    if(element.type === "checkbox") {
      element.parentNode.style.textDecoration = "line-through";
    }
  }
}




