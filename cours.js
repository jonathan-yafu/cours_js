document.addEventListener("DOMContentLoaded", function(){
	
	class Model {

		constructor() {

			this.pages = [
				{
					title: 'Hompage',
					url: '/',
					background: 'green',
					public: true
				},
				{
					title: 'Contact',
					url: '/contact',
					background: 'red',
					public: false
				}
			]
		}

		getPage(url) {
			return this.pages.find(page => page.url == url)
		}
	}

	function controller() {
		const currentUrl = '/'

		const model = new Model()
		const currentPage = model.getPage(currentUrl)
	}

	class View {

		constructor(currentPage) {
			this.container = document.querySelector('.container')

			this.container.style.background = currentPage.background
			this.updateHtml(currentPage.title)
		}

		updateHtml(html) {
			this.container.innerHTML = html
		}
	}

	controller()

})