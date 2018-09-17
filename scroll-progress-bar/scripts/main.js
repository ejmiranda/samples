document.body.appendChild(document.createTextNode(`supercalifragilisticexpialidocious `.repeat(1000)));

let progress = document.querySelector(`.progress`);
let offset = document.querySelector(`.offset`);
window.addEventListener(`scroll`, () => {
  let max = document.body.scrollHeight - window.innerHeight;
  progress.style.width = `${pageYOffset / max * 100}%`;
  console.log(`${(pageYOffset / max * 100).toFixed(2)}%`);
});