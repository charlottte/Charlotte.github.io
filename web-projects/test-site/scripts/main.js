var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yoona.jpg') {
      myImage.setAttribute('src', 'images/irene.jpg');
    } else {
      myImage.setAttribute('src', 'images/yoona.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'hello, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'hello, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }