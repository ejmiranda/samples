let body = document.querySelector(`body`);

window.addEventListener(`mousemove`, (event) => {
  let dot = document.createElement(`div`);
  dot.classList.add(`trail`);
  dot.style.left = `${event.clientX}px`;
  dot.style.top = `${event.clientY}px`;
  body.appendChild(dot);
});