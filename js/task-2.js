const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
]

const liIngRef = ingredients.map(ingredient => {
	const liRef = document.createElement('li')
	liRef.textContent = ingredient
	return liRef
})
document.querySelector('#ingredients').append(...liIngRef)
