document.addEventListener('DOMContentLoaded', function () {})

const burgerBtn = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', function () {
	burgerBtn.classList.toggle('transform')

	const burgerMenu = document.querySelector('.header__burger-menu')
	burgerMenu.classList.toggle('show')
})
