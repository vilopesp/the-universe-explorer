const homePage = document.querySelector('#home')

const routes = {
	'/': '/web/home.html',
	'/the-universe': '/web/the-universe.html',
	'/exploration': '/web/exploration.html',
	404: '/web/404.html',
}

homePage.addEventListener('click', (event) => {
	event.preventDefault()

	window.history.pushState({}, '', event.target.href)

	handle()
})

function handle() {
	const { pathname } = window.location
	const route = routes[pathname] || routes[404]

	fetch(route)
		.then((data) => data.text())
		.then((text) => {
			document.querySelector('#page').innerHTML = text
		})
}

handle()
