const inputRef = document.querySelector('#validation-input')

// const onInputLostFocus = () => {
// 	if (inputRef.value.length >= inputRef.dataset.length) {
// 		inputRef.classList.add('valid')
// 		inputRef.classList.remove('invalid')
// 	}
// 	if (inputRef.value.length < inputRef.dataset.length) {
// 		inputRef.classList.add('invalid')
// 		inputRef.classList.remove('valid')
// 	}
// }

const onInputLostFocus = () => {
	inputRef.classList.remove('invalid', 'valid')
	if (inputRef.value.length === +inputRef.dataset.length) {
		inputRef.classList.add('valid')
	} else {
		inputRef.classList.add('invalid')
	}
}
inputRef.addEventListener('blur', onInputLostFocus)
