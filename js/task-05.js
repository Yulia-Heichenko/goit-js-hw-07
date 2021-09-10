const refs = {
    input: document.querySelector('#name-input'),
    spanName: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value)
    refs.spanName.textContent = event.currentTarget.value
    
    if (event.currentTarget.value === '') {
       return refs.spanName.textContent = 'незнакомец'
    }
}
