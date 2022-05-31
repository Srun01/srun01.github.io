const myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');


myHeading.textContent = 'Hello world!';

myHeading.onclick = () => {
  myHeading.textContent = "Clicked"
}
myButton.onclick = () => {
  setUserName();
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
