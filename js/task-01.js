const categoriesListRef = document.querySelector('ul#categories');
const categoriesRef = categoriesListRef.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesRef.length}`);
console.log('\n');

categoriesRef.forEach(function (categories) {
  console.log("Category:",categories.firstElementChild.textContent)
  console.log("Elements:",categories.lastElementChild.children.length)
  console.log('\n');
})