const categoriesList = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const titleEl = item.querySelector('h2').textContent;
  const elQuantity = item.querySelectorAll('ul li').length;
  console.log(`Category:${titleEl}`);
  console.log(`Elements:${elQuantity}`);
});
