// const item = document.querySelectorAll('#categories .item');
// item.forEach(item => console.log(item));

const itemEl = document.querySelectorAll('.item')
console.log(itemEl)

const listRef = document.querySelector('#categories')
console.log(listRef.children)
itemEl.forEach(elem =>
    console.log(`Категория: ${elem.firstElementChild.textContent},
 Количество элементов: ${elem.lastElementChild.children.length},
 В списке ${itemEl.length} категории.`))


const item = document.querySelectorAll('#categories .item');
console.log(item)
const jvjvj = item.length
 console.log(jvjvj)
item.forEach(item => console.log(item));




