let ballon = document.querySelector(`p`);
let qty = 99;
ballon.textContent = ballon.textContent.repeat(qty);
let size = 30;
window.addEventListener(`keydown`, (event) => {
  switch(event.code) {
    case `ArrowUp`:
      size += 10;
      if (size === 120) {
        ballon.textContent = `💥`.repeat(qty);
      } else if (size > 120) {
        size -= 10;
      }
      break;
    case `ArrowDown`:
      if (size > 30) {
        ballon.textContent = `🎈`.repeat(qty);
        size -= 10;
      }
      break;
  }
  ballon.style.fontSize = `${size}px`;
  console.log(size);
});