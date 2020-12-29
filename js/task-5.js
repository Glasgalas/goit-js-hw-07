const inputRef = document.querySelector('#name-input')
let nameOutputRef = document.querySelector('#name-output')

const onChangeName = event => {
	nameOutputRef.textContent = event.target.value
	if (event.target.value === '') {
		nameOutputRef.textContent = 'незнакомец'
	}
}

inputRef.addEventListener('input', onChangeName)
