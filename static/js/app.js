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


//pirateTheme.addEventListener('click', () => changeTheme('pirate'));
//outerspaceTheme.addEventListener('click', () => changeTheme('outerspace'));
//dinasaurTheme.addEventListener('click', () => changeTheme('dinasaur'));
//unicornTheme.addEventListener('click', () => changeTheme('unicorn'));


// change background theme

