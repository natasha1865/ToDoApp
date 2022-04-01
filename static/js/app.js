//creating variable for switching theme
let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

//return saved theme to local storage
if (style == null) {
  setTheme('standard');
} else {
  setTheme(style);
}

//add event listner
for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

//function to set themes
function setTheme(theme) {
  if (theme == 'standard') {
    document.getElementById('switcher-id').href = './themes/standard.css';
  } else if (theme == 'spiderman') {
    document.getElementById('switcher-id').href = './themes/spiderman.css';
    let style = document.body.style.backgroundImage = "url('./static/images/spiderman.jpg')";
  } else if (theme == 'frozen') {
    document.getElementById('switcher-id').href = './themes/frozen.css';
    let style = document.body.style.backgroundImage = "url('./static/images/frozen-2.jpg')";
  } else if (theme == 'pirate') {
    document.getElementById('switcher-id').href = './themes/pirate.css';
    let style = document.body.style.backgroundImage = "url('./static/images/Pirate-Picture.jpg')";;
  } else if (theme == 'outerspace') {
    document.getElementById('switcher-id').href = './themes/outerspace.css';
    let style = document.body.style.backgroundImage = "url('./static/images/space.jpg')";
  } else if (theme == 'dinosaur') {
    document.getElementById('switcher-id').href = './themes/dinosaur.css';
    let style = document.body.style.backgroundImage = "url('./static/images/dinosaur.jpg')";
  } else if (theme == 'unicorn') {
    document.getElementById('switcher-id').href = './themes/unicorn.css';
    let style = document.body.style.backgroundImage = "url('./static/images/unicorn.jpg')";
  } 
  localStorage.setItem('style', theme);
}