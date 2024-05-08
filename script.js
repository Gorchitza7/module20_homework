let images = [
	{
		url: 'image/flat1.jpg',
		city: 'Rostov-on-Don LCD admiral',
		repairTime: '3.5 months',
		apartmentArea: 81,
		repairCost: 'Upon request',
	},
	{
		url: 'image/flat2.jpg',
		city: 'Sochi Thieves',
		repairTime: '4 months',
		apartmentArea: 105,
		repairCost: 'Upon request',
	},
	{
		url: 'image/flat3.jpg',
		city: 'Rostov-on-Don Patriotic',
		repairTime: '3 months',
		apartmentArea: 93,
		repairCost: 'Upon request',
	},
]

document.addEventListener('DOMContentLoaded', function () {
	initSlider()
})

function initSlider() {
	let completed = document.querySelector('.completed')
	let foto = completed.querySelector('.completed__foto')

	let points = completed.querySelectorAll('.point')
	let arrows = completed.querySelectorAll('.arrow')

	let rounds = foto.querySelectorAll('.round')
	let items = completed.querySelectorAll('.variant__item')
	let describs = completed.querySelectorAll('.small__text')

	arrows.forEach(arrow => {
		arrow.addEventListener('click', () => {
			let number = getCurrentFoto(points)

			removePoint(points[number])

			removeItem(items[number])

			if (arrow.classList.contains('left')) {
				number = number === 0 ? images.length - 1 : number - 1
			} else {
				number = number === images.length - 1 ? 0 : number + 1
			}

			setSlide(number)
		})
	})

	rounds.forEach(round => {
		round.addEventListener('click', () => {
			let number = getCurrentFoto(points)

			removePoint(points[number])

			removeItem(items[number])

			if (round.classList.contains('left')) {
				number = number === 0 ? images.length - 1 : number - 1
			} else {
				number = number === images.length - 1 ? 0 : number + 1
			}
			setSlide(number)
		})
	})

	for (let i = 0; i < items.length; i++) {
		points[i].dataset.index = i
		items[i].dataset.index = i
	}

	items.forEach(item => {
		item.addEventListener('click', event => {
			event.preventDefault()

			let number = getCurrentFoto(points)

			removePoint(points[number])

			removeItem(items[number])

			number = +event.currentTarget.dataset.index
			setSlide(number)
		})
	})

	points.forEach(point => {
		point.addEventListener('click', event => {
			let number = getCurrentFoto(points)

			removePoint(points[number])

			removeItem(items[number])

			number = +event.currentTarget.dataset.index
			console.log(event.currentTarget)

			setSlide(number)
		})
	})

	function setSlide(number) {
		setPoint(points[number])

		setItem(items[number])

		setFoto(number)

		setDescribe(number)
	}

	function getCurrentFoto(points) {
		for (let i = 0; i < points.length; i++) {
			if (points[i].classList.contains('active')) {
				return i
			}
		}
	}

	function removePoint(point) {
		point.classList.remove('active')
		let img = point.querySelector('img')
		img.setAttribute('src', 'icon/point_off.svg')
	}

	function setPoint(point) {
		point.classList.add('active')
		let img = point.querySelector('img')
		img.setAttribute('src', 'icon/point_on.svg')
	}

	function removeItem(item) {
		let link = item.querySelector('a')
		link.classList.remove('active')
	}

	function setItem(item) {
		let link = item.querySelector('a')
		link.classList.add('active')
	}

	function setFoto(number) {
		foto.style.backgroundImage = `url(${images[number].url})`
	}

	function setDescribe(number) {
		describs[0].textContent = images[number].city
		describs[1].textContent = images[number].repairTime
		describs[2].innerHTML = `${images[number].apartmentArea} m<sup>2</sup>`
		describs[3].textContent = images[number].repairCost
	}
}
