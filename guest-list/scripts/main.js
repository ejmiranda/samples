let checkBtn = document.querySelector(`button`);
let admitted = document.getElementById(`admitted`);
let refused = document.getElementById(`refused`);

let people = [
    `Chris`, 
    `Anne`, 
    `Colin`, 
    `Terri`, 
    `Phil`, 
    `Lola`, 
    `Sam`, 
    `Kay`, 
    `Bruce`];

checkBtn.addEventListener(`click`, checkGuestList);

function checkGuestList() {
  let admittedText = ``;
  let refusedText = ``;
  for (i = 0; i < people.length; i++) {
    if ((people[i] !== `Phil`) && (people[i] !== `Lola`)) {
      admittedText += `${people[i]}, `;
    } else {
      refusedText += `${people[i]}, `;
    }
  }
  admitted.textContent = `${admittedText.slice(0, admittedText.length - 2)}.`;
  refused.textContent = `${refusedText.slice(0, refusedText.length - 2)}.`;
}