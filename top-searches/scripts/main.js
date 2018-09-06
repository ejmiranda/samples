
let list = document.querySelector(`ul`);
let searchInput = document.querySelector(`input`);
let searchBtn = document.querySelector(`button`);
let myHistory = [];
let repeatIndex;

function createList() {
  for (let i = 0; i < myHistory.length; i++) {
    let listItem = document.createElement(`li`);
    listItem.textContent = myHistory[i];
    list.appendChild(listItem);
  }
}

function resetSearch() {
  searchInput.value = ``;
  searchInput.focus();
}

function isRepeated() {
  for (let i = 0; i < myHistory.length; i++) {
    if (searchInput.value === myHistory[i]) {
      repeatIndex = i;
      return true;
    }
  }
  return false;
}

searchBtn.onclick = function() {
  if (searchInput.value !== ``) {
    list.innerHTML = ``;
    
    if (isRepeated()) {
      console.log(`The search value is repeated: ${myHistory[repeatIndex]} @ ${repeatIndex}`);
      console.log(myHistory);
      myHistory.splice(repeatIndex, 1);
      console.log(myHistory);
    } else if (myHistory.length >= 5) {
        myHistory.pop();
    }

    myHistory.unshift(searchInput.value); 

    createList(); 
    resetSearch();
    
  } else {
    alert (`Please enter a search value`);
  }
}