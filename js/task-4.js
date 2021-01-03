const buttonDecRef = document.querySelector('button[data-action="decrement"]')
const buttonIncRef = document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector('#value')

let counterValue = 0

const onDecBtnClick = () => {
	counterValue -= 1
	valueRef.textContent = counterValue
}

const onIncBtnClick = () => {
	counterValue += 1
	valueRef.textContent = counterValue
}

buttonDecRef.addEventListener('click', onDecBtnClick)
buttonIncRef.addEventListener('click', onIncBtnClick)
