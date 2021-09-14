const inpurRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')
console.log(inpurRef)
console.log(inpurRef.value)
inpurRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.dir(event.currentTarget)
    console.dir(event.currentTarget.value)
    
    spanRef.style.fontSize = `${event.currentTarget.value}px` 
 }