const circles = document.querySelectorAll('.circle')
	const secondp = document.querySelectorAll('.container__item')

	function clearActiveClasses() {
		circles.forEach(circle => {
			circle.classList.remove('active')
		});
	}

	function clearActiveItems() {
		secondp.forEach(container__item => {
			if(!(container__item.classList.contains('second'))) {
				container__item.classList.add('second')
			}
			else {
				container__item.classList.remove('second')
			}
		});
	}

	for (const circle of circles) {
		circle.addEventListener('click', () => {
			
		clearActiveClasses()

		clearActiveItems()

		circle.classList.add('active')
	})
	}