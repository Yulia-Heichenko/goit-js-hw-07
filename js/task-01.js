// const item = document.querySelectorAll('#categories .item');
// item.forEach(item => console.log(item));

const itemEl = document.querySelectorAll('.item')

const totalСategories = `В списке ${itemEl.length} категории.`
console.log(totalСategories)

const listRef = document.querySelector('#categories')
console.log(listRef.children)
itemEl.forEach(elem =>
    console.log(`Категория: ${elem.firstElementChild.textContent},
 Количество элементов: ${elem.lastElementChild.children.length}.`))


// const item = document.querySelectorAll('#categories .item');
// console.log(item)
// const jvjvj = item.length
//  console.log(jvjvj)
// item.forEach(item => console.log(item));




