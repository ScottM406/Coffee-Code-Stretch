const listItems = document.querySelectorAll('li');

addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;
  target.style.color = 'brown';
});