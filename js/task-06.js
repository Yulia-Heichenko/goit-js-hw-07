// const inputRef = document.querySelector('#validation-input')
// console.log(inputRef)

// inputRef.addEventListener('blur', onInputBlur)

// const countLetters = Number(inputRef.attributes["data-length"].value);
// function onOutFocus(params) {
//     const clName = params.currentTarget.value.length === countLetters ? "valid" : "invalid";

// //    params.target.classList.remove("valid");
// //   params.target.classList.remove("invalid");
//  params.target.classList.add(clName);
// }


// function onOutFocus(event) {
//     console.log(event.currentTarget.classList)

//     event.currentTarget.value.length === countLetters
//         ? event.currentTarget.classList = 'valid'
//         : event.currentTarget.classList = 'invalid'
// }

const inputRef = document.querySelector('#validation-input')


inputRef.addEventListener('blur', onInputBlur)

const countLetters = Number(inputRef.attributes["data-length"].value);

function onInputBlur(event) {
    if (event.currentTarget.value.length === countLetters) {
        event.currentTarget.classList.remove("invalid")
        event.currentTarget.classList.add("valid")
        
    } else {
         event.currentTarget.classList.remove("valid")
        event.currentTarget.classList.add("invalid")
           
  }
}
