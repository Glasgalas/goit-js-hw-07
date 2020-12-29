const liRef = [...document.querySelectorAll('.item')]
const sumLiRef = liRef.length
console.log(`В списке ${sumLiRef} категории.`)

liRef
	.map(elem => {
		const titleEl = elem.querySelector('h2')
		const sumEl = elem.querySelectorAll('ul li')
		return {
			title: titleEl.textContent,
			count: sumEl.length,
		}
	})
	.forEach(entry => {
		console.log(
			'Категория: ',
			entry.title,
			'\r\nКоличество Элементов:',
			entry.count,
		)
	})
