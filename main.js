document.addEventListener('load', function () {})
document.addEventListener('DOMContentLoaded', function () {})

const burgerBtn = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', function () {
	burgerBtn.classList.toggle('transform')

	const burgerMenu = document.querySelector('.header__burger-menu')
	burgerMenu.classList.toggle('show')
})

const searchBtn = document.querySelector('.custom-search__open-search-menu')

searchBtn.addEventListener('click', function () {
	const searchField = document.querySelector('.custom-search__field')
	searchField.classList.toggle('show')
})
