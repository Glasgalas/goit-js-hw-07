const liRef = [...document.querySelectorAll('.item')]
console.log(`В списке ${liRef.length} категорий.`)

liRef.forEach(item => {
	console.log(`Категория: ${item.firstElementChild.textContent}`)
	console.log(`Количество элементов: ${item.lastElementChild.children.length}`)
})
