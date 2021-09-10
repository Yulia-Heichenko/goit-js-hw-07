const inputRef = document.querySelector('#controls > input')
console.log(inputRef)
const boxRef = document.querySelector('#boxes')
const butCreate = document.querySelector('[data-action="render"]')
const butClear = document.querySelector('[data-action="destroy"]')
butCreate.addEventListener('click', reateBoxes)
butClear.addEventListener('click', destroyBoxes)


function getRandomcolor(max) {
  return Math.floor(Math.random() * max)
}

function reateBoxes(event) {
  console.log(inputRef.value)
  event = Number(inputRef.value)
  console.log(inputRef.value)
  let boxSize = 30
  boxRef.innerHTML = [...Array(event)]
    .map(() => {
      boxSize += 10
      return `<div style="width:${boxSize}px; height:${boxSize}px;
      background-color: rgb(${getRandomcolor(255)}, ${getRandomcolor(255)}, ${getRandomcolor(255)})"></div>`
    })
    .join('')
  console.log(boxRef)
}

function destroyBoxes() {
    
  boxRef.innerHTML = ''
  inputRef.value = ''
}

