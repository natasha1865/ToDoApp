// Selectors
const spidermanTheme = document.querySelector('.spiderman');
const frozenTheme = document.querySelector('.frozen');
const pirateTheme = document.querySelector('.pirate');
const outerspaceTheme = document.querySelector('.outerspace');
const dinosaurTheme = document.querySelector('.dinosaur');
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
  document.body.style.backgroundImage = "url('./static/images/dinosaur.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function changeTheme6() {
  document.body.style.backgroundImage = "url('./static/images/unicorn.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}
// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}

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




