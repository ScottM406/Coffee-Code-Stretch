const listItems = document.querySelectorAll('li');
const listItemsArray = [...listItems]

listItems.forEach((li) => {
  li.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    target.style.color = 'brown';
  });

});
