// const item = document.querySelectorAll('#categories .item');
// item.forEach(item => console.log(item));

const itemEl = document.querySelectorAll(".item")
console.log(itemEl)
itemEl.forEach(elem =>
    console.log(`Категория: ${elem.firstElementChild.textContent},
 Количество элементов: ${elem.lastElementChild.children.length}`))