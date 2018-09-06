let userInput1 = document.querySelector(`#user-input-1`);
let userInput2 = document.querySelector(`#user-input-2`);
let submit = document.querySelector(`.submit`);
let para = document.querySelector(`p`);

submit.onclick = function() {
  setParagraph(pow(+userInput1.value, +userInput2.value).toString());
}

function pow(x,n) {
  let result = x;
  for (i=1; i < n; i++) {
    result *= x;
  }
  return result;
}

function setParagraph(text) {
  para.textContent = text;
}