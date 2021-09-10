
const btnDecrem = document.querySelector('[data-action="decrement"]')
const spanValue = document.querySelector('#value')
const btnIncrem = document.querySelector('[data-action="increment"]')

let counterValue = 0
const increment = () => (spanValue.textContent = counterValue += 1)
const decrement = () => (spanValue.textContent = counterValue -= 1)

btnDecrem.addEventListener('click', decrement)
btnIncrem.addEventListener('click', increment)
