// Selectors
const spidermanTheme = document.querySelector('.spiderman');
const frozenTheme = document.querySelector('.frozen');
const pirateTheme = document.querySelector('.pirate');
const outerspaceTheme = document.querySelector('.outerspace');
const dinosaurTheme = document.querySelector('.dinosaurs');
const unicornTheme = document.querySelector('.unicorn');

// Event Listeners to change theme
spidermanTheme.addEventListener('click', () => changeTheme1('spiderman'));
frozenTheme.addEventListener('click', () => changeTheme2('frozen'));
pirateTheme.addEventListener('click', () => changeTheme3('pirate'));
outerspaceTheme.addEventListener('click', () => changeTheme4('outerspace'));
dinosaurTheme.addEventListener('click', () => changeTheme5('dinosaur'));
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
  document.body.style.backgroundImage = "url('./static/images/Dinosaurs.jpg)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme6() {
  document.body.style.backgroundImage = "url('./static/images/unicorn.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

//window.onload = function() {
//variables
//const addButton = document.querySelector('.addButton');
//var input = document.querySelector('.input');
//const container = document.querySelector('.container');

//Add to do item to list
//class item{
  //constructor(itemName){
    //this.createDiv(itemName);
  //}

  //createDiv(itemName){
    //let input = document.createElement('.input');
    //input.value = itemName;
    //input.disabled = true;
    //input.classList.add('item_input');
    //input.type = "text";

   // let itexBox = document.createElement('div');
    //itemBox.classList.add('item');

    //let editButton = document.createElement('button');
    //editButton.innerHTML = "Edit";
    //editButton.classList.add('editButton');

    //let removeButton = document.createElement('button');
    //removeButton.innerHTML = "Remove";
    //removeButton.classList.add('removeButton');

    //container.appendChild(itemBox);

    //itemBox.appendChild(input);
    //itemBox.appendChild(editButton);
    //itemBox.appendChild(removeButton);

    //editButton.addEventListener('click', () => this.edit(input));
    
    //removeButton.addEventListener('click', () => this.remove(itemBox));
  //}
  //edit(input){
    //input.disabled = !input.disabled;  
  //}

  //remove(item){
  //container.removeChild(item);
  //}

//function check() {
  //if(input.value != ""){
    //new item(input.value);
    //input.value ="";
  //}
//}
//addButton.addEventListener('click',check);

//btn event listner
//btn.addEventListener('click', addTodoItem);

//list event listner
//list.addEventListener('click', boxChecked);



  //adding strike through style to list item
  //function boxChecked(event) {
    //const element = event.target;
    //if(element.type === "checkbox") {
      //element.parentNode.style.textDecoration = "line-through";
    //}
  //}
//}




