var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySource = myImage.getAttribute('src');
    if (mySource === 'images/superman.png') {
        myImage.setAttribute('src','images/superman-2.jpg');
    } else {
        myImage.setAttribute('src','images/superman.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myLocalStorage = localStorage;

function setUserName() {
    var myName = prompt('Please enter your name.');
    //localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!myLocalStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}