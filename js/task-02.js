const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listEl = document.querySelector('#ingredients')

const createsMarkup = ingredients.map(item => {
     
    const newListItem = document.createElement('li')
    newListItem.textContent = item
    return newListItem
    
})
console.log(createsMarkup)
listEl.append(...createsMarkup)


// console.log(createsMarkup)
// listEl.append(...createsMarkup)
// console.log(listEl)
// const itemOneEl = document.createElement('li')
// itemOneEl.textContent = 'Картошка'

// const itemTwoEl = document.createElement('li')
// itemTwoEl.textContent = 'Грибы'

// const itemThreeEl = document.createElement('li')
// itemThreeEl.textContent = 'Чеснок'

// const itemFourEl = document.createElement('li')
// itemFourEl.textContent = 'Помидоры'

// const itemFiveEl = document.createElement('li')
// itemFiveEl.textContent = 'Зелень'

// const itemSixEl = document.createElement('li')
// itemSixEl.textContent = 'Приправы'

