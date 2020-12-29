const buttonDecRef = document.querySelector('button[data-action="decrement"]')
const buttonIncRef = document.querySelector('button[data-action="increment"]')
let counterValue = document.querySelector('#value')

const onDecBtnClick = () =>
	(counterValue.textContent = Number(counterValue.textContent) - 1)
const onIncBtnClick = () =>
	(counterValue.textContent = Number(counterValue.textContent) + 1)

buttonDecRef.addEventListener('click', onDecBtnClick)
buttonIncRef.addEventListener('click', onIncBtnClick)
