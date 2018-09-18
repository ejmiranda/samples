const CHARACTERS = [
  {firstName: `Luke`, lastName: `Skywalker`, image: `../media/luke.png`},
  {firstName: `Leia`, lastName: `Organa`, image: `../media/leia.jpg`}, 
  {firstName: `Han`, lastName: `Solo`, image: `../media/han.jpg`},
  {firstName: `R2-D2`, lastName: ``, image: `../media/r2d2.png`}, 
  {firstName: `C-3PO`, lastName: ``, image: `../media/c3po.png`}
];

let menu = document.querySelector(`.menu`);
let name = document.querySelector(`.name`);
let thumbnail = document.querySelector(`.thumbnail`);

createMenuFromArrayOfObjects(CHARACTERS);

function createMenuFromArrayOfObjects(objects) {
  let currentMenuItem;
  let isFirstObject = true;
  for (let object of objects) {
    let menuItem = document.createElement(`button`);
    let menuItemName = object[Object.keys(object)[0]].toUpperCase();
    menuItem.textContent = menuItemName;
    menu.appendChild(menuItem);
    if (isFirstObject) {
      setSelectedMenuItem(currentMenuItem, menuItem);
      setPage(object);
      currentMenuItem = menuItem;
      isFirstObject = false;
    }
    menuItem.addEventListener(`click`, (event) => {
      setSelectedMenuItem(currentMenuItem, menuItem);
      setPage(object);
      currentMenuItem = menuItem;
    });
  }
}

function setSelectedMenuItem(currentMenuItem, menuItem) {
  if (currentMenuItem) {
    currentMenuItem.classList.remove(`selected`);
  }
  menuItem.classList.add(`selected`);
}

function setPage(character) {
  name.textContent = `${character.firstName} ${character.lastName}`;
  thumbnail.src = character.image;
  thumbnail.alt = `Image of ${character.firstName} ${character.lastName}`;
}